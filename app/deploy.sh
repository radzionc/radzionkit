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

process_html_file() {
    # Get the relative path without the .html extension
    file_path="$1"
    relative_path="${file_path#out/}"
    file_name="${relative_path%.html}"

    echo "$file_name"

    aws s3 cp s3://$BUCKET/$file_name.html \
      s3://$BUCKET/$file_name
}

# Find all .html files recursively in the "out" directory
find out -type f -name "*.html" | while read -r html_file; do
    process_html_file "$html_file"
done


# Upload service worker with directive to not cache it
# echo "Uploading service worker"
# aws s3 cp out/sw.js s3://$BUCKET/sw.js \
#   --metadata-directive REPLACE \
#   --cache-control max-age=0,no-cache,no-store,must-revalidate \
#   --content-type application/javascript \
#   --acl public-read

aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
