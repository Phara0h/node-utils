#!/bin/bash
set -e
set -o pipefail
## IMPORTANT
## These set commands are necessary for CI/CD
##
## set -e            Tells the script to exit immediately if a command exits with a non-zero status
## set -x            Prints the line about to be executed (preceeded with a '+') before it executes it
## set -o pipefail   Causes a pipeline (example: gulp jasmine | pino -t | pino) to produce a failure
##                   return code if any command errors.

export POSTGRES_URL="postgres://postgres@localhost/pgtest"

node_modules/.bin/gulp db:drop
node_modules/.bin/gulp db:create
