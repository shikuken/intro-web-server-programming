// TODO GUIDE

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World desde Express!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
