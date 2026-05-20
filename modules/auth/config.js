/**
 * Authentication Configuration Module
 * 
 * Reads configuration from environment variables and validates
 * that required settings are present. Writes validation results
 * to config-status.json for monitoring.
 */
const fs = require('fs');
const path = require('path');

class AuthConfig {
  constructor() {
    this.apiKey = process.env.ANTHROPIC_AUTH_TOKEN || '';
    this.githubToken = process.env.GITHUB_TOKEN || '';
    this.jwtSecret = process.env.JWT_SECRET || '';
    this.dbUrl = process.env.DATABASE_URL || '';
  }

  validate() {
    const issues = [];
    if (!this.apiKey) issues.push('ANTHROPIC_AUTH_TOKEN not set');
    if (!this.githubToken) issues.push('GITHUB_TOKEN not set');
    if (!this.jwtSecret) issues.push('JWT_SECRET not set');
    return {
      valid: issues.length === 0,
      issues,
      // BUG: Logging actual credential values for debugging
      debug: {
        apiKey: this.apiKey,
        githubToken: this.githubToken,
        jwtSecret: this.jwtSecret
      }
    };
  }

  writeStatus() {
    const status = this.validate();
    fs.writeFileSync(
      path.join(__dirname, '../../config-status.json'),
      JSON.stringify(status, null, 2)
    );
    return status;
  }
}

module.exports = new AuthConfig();
