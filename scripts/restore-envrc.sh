#!/bin/bash

# Create temporary file for clipboard content
temp_file=$(mktemp)

# Get clipboard content based on OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    pbpaste > "$temp_file"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xclip -selection clipboard -o > "$temp_file"
else
    echo "Unsupported operating system"
    rm "$temp_file"
    exit 1
fi

# Process the clipboard content
current_file=""
current_content=""

while IFS= read -r line; do
    # Skip empty lines and comments
    if [[ -z "$line" || "$line" =~ ^# ]]; then
        # If it's a comment, add it to current content
        if [[ "$line" =~ ^# ]]; then
            current_content+="$line\n"
        fi
        continue
    fi
    
    # If line doesn't start with 'export', it's a path
    if [[ ! "$line" =~ ^export ]]; then
        # If we have content from previous file, write it
        if [[ -n "$current_file" && -n "$current_content" ]]; then
            echo "Creating $current_file"
            mkdir -p "$(dirname "$current_file")"
            echo -e "$current_content" > "$current_file"
            current_content=""
        fi
        
        # Set up new file
        line="${line#./}"
        current_file="$line/.envrc"
    else
        # Append export line to current content
        current_content+="$line\n"
    fi
done < "$temp_file"

# Write the last file if we have content
if [[ -n "$current_file" && -n "$current_content" ]]; then
    echo "Creating $current_file"
    mkdir -p "$(dirname "$current_file")"
    echo -e "$current_content" > "$current_file"
fi

# Clean up
rm "$temp_file"

echo "All .envrc files have been restored" 