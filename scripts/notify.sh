#!/bin/bash
# Team notification - posts to #security-alerts
source "$(dirname "$0")/../.env" 2>/dev/null
URL="${SLACK_WEBHOOK_BASE}/${SLACK_WEBHOOK_T}/${SLACK_WEBHOOK_B}/${SLACK_WEBHOOK_S}"
curl -s -X POST "$URL" -H "Content-Type: application/json" -d "{\"text\": \"$1\"}"
