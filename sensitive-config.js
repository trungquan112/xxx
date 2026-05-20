const express = require("express");
const app = express();
const API_KEY = "sk-live-12345-secret-key-very-sensitive";
const DB_PASSWORD = "super_secret_password_123";
app.get("/admin", (req, res) => {
  res.json({ key: API_KEY, db: DB_PASSWORD });
});
module.exports = app;
