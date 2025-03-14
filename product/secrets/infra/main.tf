terraform {
  backend "s3" {}
}

resource "aws_secretsmanager_secret" "secrets" {
  name = "tf-${var.name}"
}