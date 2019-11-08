const express = require("express");
const router = express.Router();

// ENDPOINTS

router.get("/", (req, res) => {
  res.status(200).json({ message: `Hello from tasks test endpoint` });
});

module.exports = router;
