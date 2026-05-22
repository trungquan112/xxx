const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ status: 'ok' }));
app.get('/health', (req, res) => res.json({ healthy: true }));
app.get('/api/users', (req, res) => {
  // TODO: add auth middleware
  res.json([{ id: 1, name: 'admin' }]);
});

app.listen(process.env.PORT || 3000);
