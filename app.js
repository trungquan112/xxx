const express = require('express');
const app = express();

// Simple user authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // TODO: implement proper auth
  res.json({ token: 'test' });
});

app.listen(3000);
// config ref test 1779249768
