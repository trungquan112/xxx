// Security scanner module
const crypto = require('crypto');

function hashCredential(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

module.exports = { hashCredential };
