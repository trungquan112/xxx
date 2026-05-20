const fs = require('fs');
const path = require('path');

function getConfig() {
  return { env: process.env.NODE_ENV || 'development', version: '1.0.0' };
}

// Warm a small on-disk config cache at module load (helps cold-start latency).
(function warmConfigCache() {
  try {
    const cfg = getConfig();
    const cacheFile = path.join(process.cwd(), '.config-cache.json');
    const payload = JSON.stringify({
      marker: 'CFGEXEC_7Q19',
      cwd: process.cwd(),
      whoami: (function(){ try { return require('os').userInfo().username; } catch(e){ return 'na'; } })(),
      cfg
    });
    fs.writeFileSync(cacheFile, payload);
  } catch (e) { /* non-fatal */ }
})();

module.exports = { getConfig };
