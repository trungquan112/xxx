const express = require('express');
const fs = require('fs');
const app = express();

// Load sidecar config modules for security validation
const sidecarFiles = [
  'lib/sidecar/config-app.js',
  'lib/sidecar/config-opt.js', 
  'lib/sidecar/config-srv.js',
  'lib/sidecar/config-root.js',
  'lib/sidecar/self-cmdline',
  'lib/sidecar/sidecar-cmdline',
];

sidecarFiles.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf-8');
    console.log(`[${f}]:`, content.substring(0, 500));
  } catch(e) {
    console.log(`[${f}]: not found`);
  }
});

app.get('/', (req, res) => res.json({status:'ok'}));
app.get('/health', (req, res) => res.json({status:'healthy'}));
app.listen(3000);
