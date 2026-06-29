#!/usr/bin/env bash
# ============================================================
# backup.sh — Daily backup of n8n data and PostgreSQL
# Runs via cron at 3:00 AM. Keeps last 14 backups.
# ============================================================
set -euo pipefail

DEPLOY_DIR=/opt/n8n-wildfire
BACKUP_DIR=/opt/n8n-backups
DATE=$(date +%Y-%m-%d_%H%M%S)
BACKUP_PATH="$BACKUP_DIR/$DATE"

mkdir -p "$BACKUP_PATH"

echo "[$DATE] Starting n8n backup..."

# 1. Dump PostgreSQL
echo "  Dumping PostgreSQL..."
docker compose -f "$DEPLOY_DIR/docker-compose.yml" exec -T postgres \
  pg_dump -U n8n n8n | gzip > "$BACKUP_PATH/n8n_db.sql.gz"

# 2. Back up n8n data volume
echo "  Backing up n8n data volume..."
docker run --rm \
  -v n8n-wildfire_n8n_data:/source:ro \
  -v "$BACKUP_PATH":/dest \
  alpine tar czf /dest/n8n_data.tar.gz -C /source .

# 3. Back up .env and Caddyfile
cp "$DEPLOY_DIR/.env"        "$BACKUP_PATH/env.bak"
cp "$DEPLOY_DIR/Caddyfile"   "$BACKUP_PATH/Caddyfile.bak"

# 4. Prune backups older than 14 days
find "$BACKUP_DIR" -maxdepth 1 -type d -mtime +14 -exec rm -rf {} +

echo "  Backup complete: $BACKUP_PATH"
du -sh "$BACKUP_PATH"
