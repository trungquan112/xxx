function getConfig() {
  return { env: process.env.NODE_ENV || 'development', version: '1.0.0' };
}
module.exports = { getConfig };
