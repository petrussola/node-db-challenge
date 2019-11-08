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

router.post("/", async (req, res) => {
  try {
    const project = await Projects.insertProject(req.body);
    res
      .status(200)
      .json({
        ...project,
        is_completed: project.is_completed === 0 ? false : true
      });
  } catch (error) {
    res.status(500).json({
      message: `There was an error saving the project: ${error.message}`
    });
  }
});

module.exports = router;
