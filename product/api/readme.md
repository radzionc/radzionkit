# @product/api

This package provides a lightweight, TypeScript-based backend solution that implements the `api-interface` with minimal dependencies. It primarily utilizes resolvers for handling requests and is optimized for use as an AWS Lambda function, making it an ideal choice for serverless architectures requiring the expressiveness of TypeScript and the efficiency of the AWS ecosystem.

## Deployment

To deploy this project to AWS Lambda set up the following environment variables:

```bash
export BUCKET=your-bucket-name
export BUCKET_KEY=lambda.zip
export FUNCTION_NAME=your-function-name
```

Then run the following commands:

```bash
. ./deploy.sh
```
