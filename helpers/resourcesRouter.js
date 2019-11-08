const express = require("express");
const Resources = require("./resourcesModel");

const router = express.Router();

// ENDPOINTS

router.get("/", async (req, res) => {
  try {
    const resources = await Resources.getResources();
    res.status(200).json(resources);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `There was an error retrieving resources: ${error.message}`
      });
  }
});

module.exports = router;
