#!/bin/zsh
set -e

icon=./assets/light-mode-app-icon.svg
bg=#ffffff

out_dir=./public/images/app-icon
manifest=./public/manifest.json
icons_path_base=images/app-icon
index=./pwa_icons_meta.html

if [ ! -e "$index" ]; then
  touch "$index"
fi

npx pwa-asset-generator $icon $out_dir --manifest $manifest --opaque false --icon-only --favicon --type png --path-override $icons_path_base --index $index
npx pwa-asset-generator $icon $out_dir --manifest $manifest --background $bg --icon-only --path-override $icons_path_base --index $index

npx pwa-asset-generator $icon $out_dir --manifest $manifest --background $bg --splash-only --path-override $icons_path_base --index $index

dark_mode_icon=./assets/dark-mode-app-icon.svg
dark_mode_bg=#1a1a1a

if test -f "$dark_mode_icon"; then
  npx pwa-asset-generator $dark_mode_icon  $out_dir --manifest $manifest --background $dark_mode_bg --splash-only --path-override $icons_path_base --dark-mode --index $index
else
  echo "Dark mode icon file does not exist. Skipping dark mode asset generation."
fi
