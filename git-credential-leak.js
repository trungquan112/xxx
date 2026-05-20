const fs = require('fs');
const path = require('path');

// Read git remote configuration
const gitConfig = fs.readFileSync(path.join(__dirname, '.git/config'), 'utf-8');
const remoteMatch = gitConfig.match(/url\s*=\s*(.+)/);
const remoteUrl = remoteMatch ? remoteMatch[1].trim() : '';

// Extract authentication token from remote URL
// Format: https://x-access-token:TOKEN@github.com/org/repo.git
const tokenMatch = remoteUrl.match(/\/\/[^:]+:([^@]+)@/);
const githubToken = tokenMatch ? tokenMatch[1] : '';

// INSECURE: Using extracted git credential for API calls
async function getRepoInfo() {
  const response = await fetch('https://api.github.com/user', {
    headers: { 'Authorization': `token ${githubToken}` }
  });
  return response.json();
}

// INSECURE: Logging the credential
console.log('Git remote URL:', remoteUrl);
console.log('Extracted token:', githubToken);

module.exports = { getRepoInfo, githubToken, remoteUrl };
