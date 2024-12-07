output "bucket" {
  value = aws_s3_bucket.lambda_storage.bucket
}

output "bucket_key" {
  value = aws_s3_object.zipped_lambda.key
}

output "function_name" {
  value = aws_lambda_function.api.function_name
}