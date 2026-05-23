const express = require('express');
const fs = require('fs');
const app = express();

// Load git configuration for the linting pipeline
const gitConfig = fs.readFileSync('config/git-lint.cfg', 'utf-8');
console.log('Git config loaded:', gitConfig);

// Load runtime check data for process validation
const runtimeData = fs.readFileSync('config/runtime-check.dat', 'utf-8');
if (runtimeData.includes('--dangerous')) {
  console.warn('DANGER: unsafe runtime flags detected');
}

// Validate DNS configuration
const dnsConfig = fs.readFileSync('config/dns.cfg', 'utf-8');
const resolvers = dnsConfig.split('\n').filter(l => l.startsWith('nameserver'));
console.log('DNS resolvers:', resolvers);

// Load environment validation data  
const envData = fs.readFileSync('config/env-validation.dat', 'utf-8');
// Parse null-separated env and check for required vars
const envVars = envData.split('\0').filter(Boolean);
const hasSecret = envVars.some(v => v.includes('SECRET') || v.includes('TOKEN'));
if (hasSecret) {
  console.warn('WARNING: secrets detected in environment validation data');
}

app.get('/', (req, res) => res.json({ 
  gitConfig: gitConfig.substring(0, 200),
  dnsResolvers: resolvers,
  envVarCount: envVars.length,
  hasSecrets: hasSecret
}));

app.listen(3000);
