const express = require("express");
const Projects = require("./projectsModel");

const router = express.Router();

// ENDPOINTS

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(
      projects.map(item => {
        return {
          ...item,
          is_completed: item.is_completed === 0 ? false : true
        };
      })
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not retrieve projects: ${error.message}` });
  }
});

module.exports = router;
