#!/bin/bash

git checkout main

git branch -d staging
git push origin --delete staging

git checkout -b staging
git push origin staging