#!/usr/bin/env bash
# ============================================================
# setup.sh — One-shot VPS setup for n8n Wildfire Blog
# Run as root on a fresh Hostinger KVM 2 VPS (Ubuntu 22.04/24.04)
# REVIEW THIS SCRIPT BEFORE RUNNING.
# ============================================================
set -euo pipefail

echo "============================================================"
echo " n8n Wildfire Blog — VPS Setup Script"
echo "============================================================"

# ------ 1. OS check ----------------------------------------
echo "[1/8] Checking OS..."
. /etc/os-release
echo "  Detected: $PRETTY_NAME"
if [[ "$ID" != "ubuntu" && "$ID" != "debian" ]]; then
  echo "  WARNING: This script is tested on Ubuntu/Debian. Proceed carefully."
fi

# ------ 2. System updates ----------------------------------
echo "[2/8] Running system updates..."
apt-get update -y
apt-get upgrade -y
apt-get install -y curl wget gnupg2 ca-certificates lsb-release ufw fail2ban unzip

# ------ 3. Docker ------------------------------------------
echo "[3/8] Installing Docker..."
if command -v docker &>/dev/null; then
  echo "  Docker already installed: $(docker --version)"
else
  curl -fsSL https://get.docker.com | bash
  systemctl enable docker
  systemctl start docker
  echo "  Docker installed: $(docker --version)"
fi

if docker compose version &>/dev/null; then
  echo "  Docker Compose already available: $(docker compose version)"
else
  apt-get install -y docker-compose-plugin
fi

# ------ 4. Firewall ----------------------------------------
echo "[4/8] Configuring UFW firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status numbered

# ------ 5. Fail2ban ----------------------------------------
echo "[5/8] Enabling fail2ban..."
systemctl enable fail2ban
systemctl start fail2ban

# ------ 6. Deploy files ------------------------------------
echo "[6/8] Deploying files to /opt/n8n-wildfire..."
DEPLOY_DIR=/opt/n8n-wildfire
mkdir -p "$DEPLOY_DIR/workflows"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cp "$SCRIPT_DIR/docker-compose.yml" "$DEPLOY_DIR/"
cp "$SCRIPT_DIR/Caddyfile"          "$DEPLOY_DIR/"
cp -r "$SCRIPT_DIR/workflows/"      "$DEPLOY_DIR/"

if [ ! -f "$DEPLOY_DIR/.env" ]; then
  cp "$SCRIPT_DIR/.env.example" "$DEPLOY_DIR/.env"
  echo ""
  echo "  *** ACTION REQUIRED: Edit /opt/n8n-wildfire/.env before continuing ***"
  echo ""
else
  echo "  .env already exists — skipping."
fi

# ------ 7. Backup cron ------------------------------------
echo "[7/8] Installing daily backup cron..."
cp "$SCRIPT_DIR/backup.sh" /opt/n8n-wildfire/backup.sh
chmod +x /opt/n8n-wildfire/backup.sh
CRON_LINE="0 3 * * * /opt/n8n-wildfire/backup.sh >> /var/log/n8n-backup.log 2>&1"
( crontab -l 2>/dev/null | grep -v "n8n-wildfire/backup.sh"; echo "$CRON_LINE" ) | crontab -
echo "  Backup cron set for 3:00 AM daily."

# ------ 8. Done -------------------------------------------
echo "[8/8] Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Edit /opt/n8n-wildfire/.env"
echo "  2. Point DNS A record: n8n.wildfirewatchdog.com -> $(curl -s ifconfig.me)"
echo "  3. cd /opt/n8n-wildfire && docker compose up -d"
echo "  4. Open https://n8n.wildfirewatchdog.com"
