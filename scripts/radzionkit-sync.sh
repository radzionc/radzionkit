#!/bin/bash

# Script to sync lib packages from radzionkit to the current repository
set -e  # Exit on error

# Display what the script is doing
echo "🚀 RadzionKit Sync: Updating lib packages from the radzionkit template"

# Get the current repository's root directory
CURRENT_REPO=$(pwd)
echo "Current repository: $CURRENT_REPO"

# Create temporary directory for cloning radzionkit
TEMP_DIR=$(mktemp -d)
echo "Created temporary directory: $TEMP_DIR"

# Cleanup function to remove temporary directory on exit
cleanup() {
  echo "Cleaning up temporary directory..."
  rm -rf "$TEMP_DIR"
  echo "Done."
}
trap cleanup EXIT

# Clone radzionkit repository
echo "Cloning radzionkit repository..."
git clone https://github.com/radzionc/radzionkit.git "$TEMP_DIR"
echo "Repository cloned successfully."

# Check if lib directories exist
if [[ ! -d "$TEMP_DIR/lib" ]]; then
  echo "Error: lib directory not found in radzionkit repository"
  exit 1
fi

if [[ ! -d "$CURRENT_REPO/lib" ]]; then
  echo "Error: lib directory not found in current repository"
  exit 1
fi

# Find all packages in the lib directory of radzionkit
echo "Finding packages in radzionkit/lib..."
RADZIONKIT_PACKAGES=()
for package_dir in "$TEMP_DIR/lib/"*/; do
  if [[ -d "$package_dir" ]]; then
    package_name=$(basename "$package_dir")
    RADZIONKIT_PACKAGES+=("$package_name")
  fi
done

# Find all packages in the lib directory of current repository
echo "Finding packages in current repository lib..."
CURRENT_PACKAGES=()
for package_dir in "$CURRENT_REPO/lib/"*/; do
  if [[ -d "$package_dir" ]]; then
    package_name=$(basename "$package_dir")
    CURRENT_PACKAGES+=("$package_name")
  fi
done

# Find common packages
echo "Finding common packages to sync..."
COMMON_PACKAGES=()
for package in "${RADZIONKIT_PACKAGES[@]}"; do
  for current_package in "${CURRENT_PACKAGES[@]}"; do
    if [[ "$package" == "$current_package" ]]; then
      COMMON_PACKAGES+=("$package")
      break
    fi
  done
done

# Display packages that will be synced
echo "Will sync the following packages:"
for package in "${COMMON_PACKAGES[@]}"; do
  echo "- lib/$package"
done

# Sync packages
for package in "${COMMON_PACKAGES[@]}"; do
  echo "Syncing lib/$package..."
  
  # Remove current package
  echo "  Removing current version of lib/$package"
  rm -rf "$CURRENT_REPO/lib/$package"
  
  # Copy package from radzionkit
  echo "  Copying package from radzionkit"
  cp -r "$TEMP_DIR/lib/$package" "$CURRENT_REPO/lib/"
  
  echo "  Package lib/$package synced successfully."
done

echo "✅ All packages have been synced successfully!"
echo "Note: You may need to run 'yarn install' to update dependencies after the sync."
