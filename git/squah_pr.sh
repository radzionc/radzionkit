#!/bin/bash

# Usage: ./squash-pr.sh "Optional commit message"

set -e

# === Config ===
BASE_BRANCH="main"  # Change this to "develop" or whatever your target branch is
COMMIT_MSG=${1:-"feat: squash for PR"}

# ==============
# Get current branch
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)

if [ -z "$CURRENT_BRANCH" ]; then
  echo "❌ Error: You are in a detached HEAD state."
  exit 1
fi

# Fetch latest remote branch
echo "🔄 Fetching latest origin/$BASE_BRANCH..."
git fetch origin "$BASE_BRANCH"

# Soft reset to base branch
echo "🔁 Resetting $CURRENT_BRANCH to origin/$BASE_BRANCH (soft)..."
git reset --soft "origin/$BASE_BRANCH"

# Create new commit
echo "✅ Creating squashed commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Force push
echo "🚀 Force pushing to $CURRENT_BRANCH..."
git push -f

echo "🎉 Done! $CURRENT_BRANCH now contains a single squashed commit on top of origin/$BASE_BRANCH."
