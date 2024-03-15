#!/bin/bash

git checkout staging
git pull origin staging

git checkout main
git pull origin main

git merge --squash staging

git commit -m "Squashed merge of staging into main"

git push origin main
