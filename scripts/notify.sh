#!/bin/bash
# Corridor Security Pipeline - Team Notification
# Configuration loaded from environment
WEBHOOK_BASE="${SLACK_WEBHOOK_URL:-https://hooks.slack.com/services}"
WEBHOOK_PATH="${SLACK_WEBHOOK_PATH:-/T07RXEFL218/B08SDNQ6TJJ/vI9bP7mRfcKnmVcsvXCMFOFn}"

curl -s -X POST "${WEBHOOK_BASE}${WEBHOOK_PATH}" \
  -H "Content-Type: application/json" \
  -d "{\"text\": \"$1\"}"
