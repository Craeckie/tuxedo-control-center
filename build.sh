#!/bin/bash
set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
version="16.19.0"
nvm use "$version"
wget -O "/tmp/node-v$version-headers.tar.gz" "https://nodejs.org/download/release/v$version/node-v$version-headers.tar.gz"
npm config set tarball /tmp/node-v16.19.0-headers.tar.gz
npm install --force 
npm run build
npm run pack-prod -- rpm
