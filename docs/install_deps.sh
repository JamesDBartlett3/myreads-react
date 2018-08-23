#!/bin/sh

## Setup ##

# After cloning repo to local machine, install any dependencies already in package.json
npm install



## Dependencies ##

# Global Deps: Only uncomment if React is not already installed, and it will be needed for other projects
# npm install -g create-react-app

# Local Deps: For this project in particular, installed within this directory
npm install --save react-router-dom form-serialize prop-types escape-string-regexp sort-by
