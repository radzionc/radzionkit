. ./set_env_vars.sh

yarn build

echo "Uploading files to $BUCKET..."

aws s3 sync out s3://$BUCKET/ \
  --delete \
  --exclude ./out/_next/static \
  --exclude ./out/images \

aws s3 cp ./out/_next/static s3://$BUCKET/_next/static \
  --metadata-directive REPLACE \
  --cache-control immutable,max-age=31536000,public \
  --acl public-read \
  --recursive

aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
