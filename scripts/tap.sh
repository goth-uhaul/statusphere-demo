#!/bin/sh
APP_WEBHOOK_URL="http://localhost:3000/api/status/webhook"

tap run --webhook-url=$APP_WEBHOOK_URL --collection-filters=xyz.statusphere.status --signal-collection=xyz.statusphere.status