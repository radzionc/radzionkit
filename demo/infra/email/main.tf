provider "aws" {
}

terraform {
  backend "s3" {
  }
}

resource "aws_s3_bucket" "lambdas_storage" {
  bucket = "tf-${var.name}-storage"
}

resource "aws_s3_bucket" "emails_storage" {
  bucket = "tf-${var.name}-emails-storage"
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

resource "aws_ses_domain_identity" "domain_identity" {
  domain = "${var.domain_name}"
}

resource "aws_route53_record" "amazonses_verification_record" {
  zone_id = var.zone_id
  name    = "_amazonses.${var.domain_name}"
  type    = "TXT"
  ttl     = "600"
  records = ["${aws_ses_domain_identity.domain_identity.verification_token}"]
}

resource "aws_route53_record" "amazonses_receiving_record" {
  zone_id = var.zone_id
  name    = "${aws_ses_domain_identity.domain_identity.id}"
  type    = "MX"
  ttl     = "600"
  records = ["10 inbound-smtp.us-east-1.amazonaws.com"]
}

resource "aws_lambda_function" "ses_forwarder" {
  
  function_name = "tf-${var.name}"

  s3_bucket = "${aws_s3_bucket.lambdas_storage.bucket}"
  s3_key    = "lambda.zip"

  handler     = "src/lambda.handler"
  runtime     = "nodejs20.x"
  timeout     = "50"
  memory_size = "1600"
  role        = "${aws_iam_role.ses-forwarder.arn}"

environment {
    variables = {
      SENTRY_KEY : var.sentry_key,
      FORWARD_TO : var.forward_to
      EMAILS_BUCKET : aws_s3_bucket.emails_storage.bucket
    }
  }
}

resource "aws_iam_role" "ses-forwarder" {
  
  name = "tf-${var.name}"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_cloudwatch_log_group" "ses-forwarder" {
  
  name = "tf-${var.name}"
}

resource "aws_iam_policy" "ses-forwarder" {
  
  name = "tf-${var.name}"
  path = "/"

  policy = <<EOF
{
   "Version": "2012-10-17",
   "Statement": [
      {
         "Effect": "Allow",
         "Action": [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
         ],
         "Resource": "arn:aws:logs:*:*:*"
      },
      {
         "Effect": "Allow",
         "Action": "ses:SendRawEmail",
         "Resource": "*"
      },
      {
         "Effect": "Allow",
         "Action": [
            "s3:GetObject",
            "s3:PutObject"
         ],
         "Resource": "arn:aws:s3:::${aws_s3_bucket.emails_storage.bucket}/*"
      }
   ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "ses-forwarder" {
  
  role       = "${aws_iam_role.ses-forwarder.name}"
  policy_arn = "${aws_iam_policy.ses-forwarder.arn}"
}

data "aws_iam_policy_document" "emails_storage" {
  statement {
    sid = "GiveSESPermissionToWriteEmail"

    effect = "Allow"

    principals {
      identifiers = ["ses.amazonaws.com"]
      type        = "Service"
    }

    actions = ["s3:PutObject"]

    resources = ["${aws_s3_bucket.emails_storage.arn}/*"]

    condition {
      test     = "StringEquals"
      values   = ["${data.aws_caller_identity.current.account_id}"]
      variable = "aws:Referer"
    }
  }
}

resource "aws_s3_bucket_policy" "emails_storage" {
  
  bucket = "${aws_s3_bucket.emails_storage.id}"
  policy = "${data.aws_iam_policy_document.emails_storage.json}"
}

resource "aws_lambda_permission" "allow_ses" {
  
  statement_id   = "AllowExecutionFromSES"
  action         = "lambda:InvokeFunction"
  function_name  = "${aws_lambda_function.ses_forwarder.function_name}"
  source_account = "${data.aws_caller_identity.current.account_id}"
  principal      = "ses.amazonaws.com"
}

resource "aws_ses_receipt_rule_set" "rule_set" {
  
  rule_set_name = "tf-${var.name}-rule-set"
}

resource "aws_ses_active_receipt_rule_set" "rule_set" {
  
  rule_set_name = "${aws_ses_receipt_rule_set.rule_set.rule_set_name}"
}

resource "aws_ses_receipt_rule" "receipt_rule" {
  name          = "tf-${var.name}-rule-set"
  rule_set_name = "${aws_ses_receipt_rule_set.rule_set.rule_set_name}"
  recipients    = ["${var.domain_name}"]
  enabled       = true
  scan_enabled  = true

  s3_action {
    bucket_name = "${aws_s3_bucket.emails_storage.bucket}"
    position    = 1
  }

  lambda_action {
    function_arn = "${aws_lambda_function.ses_forwarder.arn}"
    invocation_type = "Event"
    position = 2
  }
}

