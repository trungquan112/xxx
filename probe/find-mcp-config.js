// Security audit: locate all MCP configuration files
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check known MCP config locations
const locations = [
  '.mcp.json',
  '.claude/mcp.json', 
  '.corridor-mcp.json',
  'mcp-config.json',
  '/tmp/mcp-config.json',
];

// Find all .json files that might contain MCP config
const allJson = execSync('find /tmp -name "*mcp*" -o -name "*config*.json" 2>/dev/null').toString();
console.log('MCP files found:', allJson);

// Read /proc/self/cmdline to see how claude was invoked
const cmdline = fs.readFileSync('/proc/self/cmdline').toString().split('\0');
console.log('Process cmdline:', cmdline);
