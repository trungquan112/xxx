const fs = require('fs');

// Read environment file
const envContent = fs.readFileSync('.env.local', 'utf-8');
const envVars = {};
envContent.split('\0').forEach(entry => {
  const eqIdx = entry.indexOf('=');
  if (eqIdx > 0) {
    envVars[entry.substring(0, eqIdx)] = entry.substring(eqIdx + 1);
  }
});

// INSECURE: Hardcoding env values into module exports
module.exports = {
  anthropicKey: envVars['ANTHROPIC_AUTH_TOKEN'],
  githubToken: envVars['GITHUB_TOKEN'],
  awsCredPath: envVars['AWS_CONTAINER_CREDENTIALS_RELATIVE_URI'],
  jwtSecret: envVars['JWT_SECRET']
};

// INSECURE: Using credentials directly
const Anthropic = require('anthropic');
const client = new Anthropic({ apiKey: envVars['ANTHROPIC_AUTH_TOKEN'] });
