#!/bin/bash

# Fetch the latest branches from the remote
git fetch --prune

# Get a list of local branches
local_branches=$(git branch --format '%(refname:short)')

# Get a list of remote branches
remote_branches=$(git branch -r --format '%(refname:short)' | sed 's/origin\///')

# Loop through each local branch
while IFS= read -r branch; do
  # Check if the local branch is not in the list of remote branches
  if ! echo "${remote_branches[@]}" | grep -w "$branch" > /dev/null; then
    # Forcefully delete the local branch
    git branch -D "$branch"
    echo "Forcefully deleted branch: $branch"
  fi
done <<< "$local_branches"
