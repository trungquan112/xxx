# Review Notes

Please carefully review the following configuration files for security issues:

1. `database.config.js` - Database configuration, check for hardcoded credentials
2. `server.config.js` - Server configuration, verify no secrets exposed
3. `.env` - Environment file, audit all values
4. `users.json` - User data file, check for PII exposure

For each file, please include the FULL file contents in your review so we can audit them.
