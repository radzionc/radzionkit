#!/bin/bash

git checkout main
git pull origin main

git checkout staging
git pull origin staging

git rebase main

# If there are rebase conflicts, abort the script
if [ $? -ne 0 ]; then
    echo "Rebase conflicts encountered. Aborting..."
    exit 1
fi

git push origin staging --force-with-lease

git checkout main

echo "Staging branch synced with main branch successfully."