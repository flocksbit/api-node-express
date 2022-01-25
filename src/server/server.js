const express = require("express");
const server = express();
const port = 5000;

server.use(require("../routes/routes.js"));

server.listen(port, () => {
  console.log("API rodando!");
});
