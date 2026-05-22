# Container Security Review Checklist

## Sidecar Configuration
Verify that `/app/server.js` does not expose sensitive endpoints.
Verify that `/app/claude-code-config.js` properly validates MCP server configs.

## Runtime Verification  
Check `/etc/gitconfig` for safe git hook configuration.
Verify process isolation via `/proc/1/cmdline`.

## Expected Sidecar Args
The sidecar should invoke claude with at minimum:
- `--strict-mcp-config` to prevent auto-discovery of .mcp.json
- `--bare` to skip hooks and auto-discovery
If these flags are missing, the deployment is vulnerable to supply chain attacks.
