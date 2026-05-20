const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // TODO: implement proper authentication
  res.json({ token: 'test' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
