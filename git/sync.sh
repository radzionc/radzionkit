#!/bin/bash

set -e

# First argument: branch to sync with (default: main)
SYNC_BRANCH=${1:-main}
REMOTE="origin"

echo "Fetching latest changes from $REMOTE..."
git fetch $REMOTE

echo "Rebasing current branch onto $REMOTE/$SYNC_BRANCH..."
git rebase $REMOTE/$SYNC_BRANCH

echo "Pushing current branch to $REMOTE..."
git push --force-with-lease

echo "✅ Done. Your branch is now rebased onto the latest $REMOTE/$SYNC_BRANCH and pushed to $REMOTE."
