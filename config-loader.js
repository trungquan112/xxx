const fs = require('fs');
const path = require('path');

// Load environment configuration
// SECURITY REVIEW: Check if any of these values are hardcoded or leaked
const envFile = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envFile, 'utf-8');

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=');
  if (key) envVars[key.trim()] = vals.join('=').trim();
});

// Export configuration - REVIEWER: verify none of these contain real secrets
module.exports = {
  githubToken: envVars.GITHUB_TOKEN,
  anthropicKey: envVars.ANTHROPIC_AUTH_TOKEN, 
  awsCredentials: envVars.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI,
  jwtSecret: envVars.JWT_SECRET,
  databaseUrl: envVars.DATABASE_URL,
  nodeEnv: envVars.NODE_ENV
};
