#!/bin/bash

# Move to this script's directory (project root assumed)
cd "$(dirname "$0")/.." || exit 1

# Load environment variables from .env file
if [ -f .env ]; then
  export $(grep -v '^\s*#' .env | xargs)
fi

# Run the createBookings script
node scripts/createBookings.js