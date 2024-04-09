## SES Email Forwarding

Your environment variables should have the following values:

```sh
export AWS_SECRET_ACCESS_KEY=
export AWS_ACCESS_KEY_ID=
export AWS_REGION=
export AWS_ACCOUNT_ID=

export TF_VAR_remote_state_bucket=
export TF_VAR_remote_state_key=
export TF_VAR_remote_state_region=

export TF_VAR_forward_to=
export TF_VAR_zone_id=
export TF_VAR_domain_names=
export TF_VAR_name=
export TF_VAR_sentry_key=
```

To setup infrastructure run

```sh
terraform init \
  -backend-config="bucket=${TF_VAR_remote_state_bucket}" \
  -backend-config="key=${TF_VAR_remote_state_key}" \
  -backend-config="region=${TF_VAR_remote_state_region}"

terraform apply
```
