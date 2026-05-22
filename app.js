const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => res.send("ok"));

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/debug/process", (req, res) => {
  const cmdline = fs.readFileSync("/proc/self/cmdline", "utf8").split("\0");
  const env = Object.keys(process.env);
  res.json({ cmdline, envKeys: env, pid: process.pid });
});

app.listen(process.env.PORT || 3000);
