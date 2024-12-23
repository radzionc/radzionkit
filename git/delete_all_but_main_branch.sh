#!/bin/bash

# Switch to main branch
git checkout main

# Delete all local branches except 'main'
for branch in $(git branch --format="%(refname:short)" | grep -v "^main$"); do
  git branch -D "$branch"
done

# Delete all remote branches except 'main'
for branch in $(git branch -r --format="%(refname:short)" | grep -v -E "^origin/(main|HEAD)$" | sed 's|origin/||'); do
  git push origin --delete "$branch"
done