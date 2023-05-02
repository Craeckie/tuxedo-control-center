#!/bin/bash
set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
version="16.19.0"
nvm use "$version"
set -x
dst_path="/tmp/node-v$version-headers.tar.gz"
[[ ! -f "$dst_path" ]] && wget -O "$dst_path" "https://nodejs.org/download/release/v$version/node-v$version-headers.tar.gz"
npm config set tarball /tmp/node-v16.19.0-headers.tar.gz
npm install --force 
npm run build
npm run pack-prod -- rpm
