output "secrets_arn" {
  value = aws_secretsmanager_secret.secrets.arn
}

output "secrets_name" {
  value = aws_secretsmanager_secret.secrets.name
}
