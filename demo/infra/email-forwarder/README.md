## SES Email Forwarding

Yor should set the following environment variables before running terraform

```sh
export AWS_SECRET_ACCESS_KEY=
export AWS_ACCESS_KEY_ID=
export AWS_REGION=

# optional, only if you want to store terraform state in S3
export TF_VAR_remote_state_bucket=
export TF_VAR_remote_state_key=
export TF_VAR_remote_state_region=

export TF_VAR_name=
# e.g. john@gmail.com
export TF_VAR_forward_to=
# a JSON string, e.g. 
# '[{"domain_name":"radzion.com","zone_id":"A1026834LOTQUY1CVV2S"},{"domain_name":"increaser.org","zone_id":"Z1QT1BOR8JUIVM"}]'
export TF_VAR_domains=
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
