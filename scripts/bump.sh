#!/usr/bin/env bash
# Bump version and propagate to all CSS/JS query strings in index.html
# Usage: ./scripts/bump.sh [major|minor|patch]
#   Defaults to patch if no argument given.

set -euo pipefail

VERSION_FILE="version.txt"
INDEX="index.html"

if [[ ! -f "$VERSION_FILE" ]]; then
  echo "Error: $VERSION_FILE not found" >&2
  exit 1
fi

CURRENT=$(tr -d '[:space:]' < "$VERSION_FILE")
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT"

BUMP="${1:-patch}"
case "$BUMP" in
  major) MAJOR=$((MAJOR + 1)); MINOR=0; PATCH=0 ;;
  minor) MINOR=$((MINOR + 1)); PATCH=0 ;;
  patch) PATCH=$((PATCH + 1)) ;;
  *) echo "Usage: $0 [major|minor|patch]" >&2; exit 1 ;;
esac

NEW="${MAJOR}.${MINOR}.${PATCH}"
echo "$NEW" > "$VERSION_FILE"

sed -i '' "s/\?v=[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*/\?v=${NEW}/g" "$INDEX"
sed -i '' "s/>v[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*</>v${NEW}</g" "$INDEX"

echo "Bumped $CURRENT → $NEW"
