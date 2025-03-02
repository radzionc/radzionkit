#!/bin/bash

# Print a message with a colored header
print_message() {
  echo -e "\033[1;36m=== $1 ===\033[0m"
}

# Upgrade Yarn to the latest stable version
print_message "Upgrading Yarn to the latest stable version"
yarn set version stable

# Upgrade all dependencies in all workspaces
print_message "Upgrading all dependencies in all workspaces"
yarn workspaces foreach --all exec yarn up "*"

print_message "Upgrade completed successfully!" 