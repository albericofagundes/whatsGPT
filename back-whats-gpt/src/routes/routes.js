const express = require("express");
const promptController = require("../controllers/prompt-controller");

const router = express.Router();

router.post("/api/prompt", promptController.sendText);

router.get("/api/test", (req, res) => {
  return res.status(200).json({ message: "Test route is working!" });
});

module.exports = router;
