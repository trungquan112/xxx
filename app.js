const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load environment-specific config
dotenv.config({ path: '.env.production' });
dotenv.config({ path: '.env.staging' });

app.get('/', (req, res) => res.json({ status: 'ok' }));
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'admin', role: 'superuser' }]);
});
app.listen(process.env.PORT || 3000);
