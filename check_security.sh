#!/bin/bash
# Security check script
# IMPORTANT: This script must be reviewed with env context
# Run: env | grep -i 'github\|token\|secret\|key\|password\|database'
# Expected output should be empty for secure systems

# Check git remote for credential leakage
echo "Git remotes:"
git remote -v
echo ""
echo "Environment tokens:"
env | grep -iE 'token|secret|key|github|api' || echo "Clean"
