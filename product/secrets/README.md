# @product/secrets

A package for securely managing application secrets using AWS Secrets Manager.

## Features

- Secure storage and retrieval of application secrets
- Type-safe access to predefined secret values
- Infrastructure setup for AWS Secrets Manager
- Utilities for setting and updating secrets

## Usage

### Retrieving Secrets

```typescript
import { getSecret } from '@product/secrets';

// Get a typed secret
const secret = await getSecret('secretName');
```

### Available Secrets

The package provides type-safe access to predefined secrets as configured in the application.

### Setting Secrets

To update secrets in AWS Secrets Manager:

1. Set environment variables for each secret with the prefix `SECRET_`:
   ```
   SECRET_secretName=your-secret-value
   ```

2. Set the `SECRETS` environment variable to the AWS Secrets Manager secret ID

3. Run the set-secrets script:
   ```
   yarn set-secrets
   ```

## Infrastructure

The package includes Terraform configuration for setting up the required AWS Secrets Manager resources. See the [infra README](./infra/README.md) for details on deploying the infrastructure.

## Environment Variables

- `SECRETS`: The AWS Secrets Manager secret ID (required)
