const express = require("express");
require("express-group-routes");
const router = express.Router();

router.group("/api/", (router) => {
  router.get("/", (req, res) => {
    res.status(200).json({ view: "on" });
  });
});

router.group("/api/controller", (router) => {
  router.get("/", (req, res) => {
    res.status(200).json({ controller: "on" });
  });
});

module.exports = router;
