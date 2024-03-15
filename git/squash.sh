#!/bin/bash

# Check if a parent branch name was provided as an argument
if [ $# -ne 1 ]; then
  echo "Usage: $0 <parent-branch-name>"
  exit 1
fi

parent_branch=$1

# Identify the current Git branch first to avoid switching context prematurely
current_branch=$(git rev-parse --abbrev-ref HEAD)

echo "Current branch is '$current_branch'. Ensuring it's up to date..."
git pull origin $current_branch

echo "Switching to parent branch '$parent_branch' to pull the latest changes..."
git checkout $parent_branch
git pull origin $parent_branch

# Switch back to the current branch after updating the parent branch
echo "Switching back to the current branch '$current_branch'..."
git checkout $current_branch

# Generate a generic commit message
commit_message="Squashed commits for '$current_branch' relative to '$parent_branch'"

# Reset current branch to the point where it diverged from the parent branch
# Then, stage all changes and create a single new commit with a generic commit message
echo "Resetting and squashing commits..."
git reset --soft $(git merge-base $current_branch $parent_branch)
git add .
git commit -m "$commit_message" --no-verify

# Inform the user about force-pushing
echo "Squashing complete with commit message: '$commit_message'"
echo "If you previously pushed this branch, you'll need to force push it using:"
echo "git push origin $current_branch --force"
