provider "aws" {
}

terraform {
  backend "s3" {
  }
}

resource "aws_s3_bucket" "lambda_storage" {
  bucket = "tf-${var.name}-storage"
}

data "archive_file" "local_zipped_lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda"
  output_path = "${path.module}/lambda.zip"
}


resource "aws_s3_object" "zipped_lambda" {
  bucket = aws_s3_bucket.lambda_storage.bucket
  key    = "lambda.zip"
  source = data.archive_file.local_zipped_lambda.output_path
}

resource "aws_lambda_function" "api" {
  function_name = "tf-${var.name}"

  s3_bucket   = aws_s3_bucket.lambda_storage.bucket
  s3_key      = "lambda.zip"
  memory_size = "1024"

  handler = "lambda.handler"
  runtime = "nodejs22.x"
  timeout = "50"
  role    = aws_iam_role.api.arn

  environment {
    variables = {
      SENTRY_KEY = var.sentry_key
    }
  }
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.arn
  principal     = "apigateway.amazonaws.com"

  source_arn = "arn:aws:execute-api:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:${aws_api_gateway_rest_api.api.id}/*/*"
}
