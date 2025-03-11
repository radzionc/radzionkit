#!/bin/bash

# Get the root folder name
root_name=$(basename "$(pwd)")

# Create output file name
output_file="${root_name}_env_vars.txt"

# Find all .envrc files and create a formatted output
output=""
while IFS= read -r file; do
    # Get relative path
    rel_path=$(dirname "$file")
    
    # Add path header
    output+="$rel_path\n\n"
    
    # Add file content
    output+="$(cat "$file")\n\n"
done < <(find . -name ".envrc" -type f)

# Write to file
echo -e "$output" > "$output_file"

echo "All .envrc files have been saved to $output_file" 