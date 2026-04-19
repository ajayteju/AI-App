#!/usr/bin/env bash
set -euo pipefail

OUTPUT_NAME="${1:-AI-App-files.zip}"

FILES=(
  ".dockerignore"
  ".gitignore"
  "Dockerfile"
  "docker-compose.yml"
  "index.html"
  "package-lock.json"
  "package.json"
  "readme.md"
  "src/App.jsx"
  "src/main.jsx"
  "src/styles.css"
  "vite.config.js"
)

echo "Creating archive: ${OUTPUT_NAME}"

for f in "${FILES[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "Missing expected file: $f" >&2
    exit 1
  fi
done

zip -r "${OUTPUT_NAME}" "${FILES[@]}"
echo "Done. Archive written to: $(pwd)/${OUTPUT_NAME}"
echo "Transfer this zip to your laptop and extract it."
