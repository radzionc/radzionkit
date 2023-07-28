#!/bin/zsh -e

light_mode_logo=./assets/light-logo.svg
dark_mode_logo=./assets/dark-logo.svg

light_mode_bg=#ffffff
dark_mode_bg=#1a1a1a

out_dir=./public/images/logo
manifest=./public/manifest.json
icons_path_base=images/logo

npx pwa-asset-generator $light_mode_logo $out_dir --manifest $manifest --opaque false --icon-only --favicon --type png --path-override $icons_path_base
npx pwa-asset-generator $light_mode_logo $out_dir --manifest $manifest --background $light_mode_bg --icon-only --path-override $icons_path_base

npx pwa-asset-generator $light_mode_logo $out_dir --manifest $manifest --background $light_mode_bg --splash-only --path-override $icons_path_base
npx pwa-asset-generator $dark_mode_logo  $out_dir --manifest $manifest --background $dark_mode_bg --splash-only --path-override $icons_path_base --dark-mode