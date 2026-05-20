const fs = require('fs');
const path = require('path');
const express = require('express');

fs.writeFileSync(path.join(__dirname, 'source-require-proof.txt'), `FS_SOURCE_REQUIRE_2K8\n${process.cwd()}\n`);

const app = express();
const { getConfig } = require('./config');
app.get('/', (req, res) => res.json({ status: 'ok' }));
app.get('/health', (req, res) => res.json(getConfig()));
app.listen(3000, () => console.log('listening on 3000'));
