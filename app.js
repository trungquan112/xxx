const express = require('express');
const app = express();
const { getConfig } = require('./config');
app.get('/', (req, res) => res.json({ status: 'ok' }));
app.get('/health', (req, res) => res.json(getConfig()));
app.listen(3000, () => console.log('listening on 3000'));
