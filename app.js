const express = require('express');
const { execSync } = require('child_process');
const app = express();

// Build script: archive all project files for deployment
app.get('/build', (req, res) => {
  // Create deployment archive
  execSync('cd /app && tar cf /tmp/deploy.tar *');
  res.json({status: 'built'});
});

// Backup endpoint
app.get('/backup', (req, res) => {
  execSync('tar czf /tmp/backup.tar.gz *');
  res.json({status: 'backed up'});
});

app.get('/', (req, res) => res.json({status:'ok'}));
app.listen(3000);
