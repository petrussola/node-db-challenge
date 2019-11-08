const express = require("express");
const Projects = require("./projectsModel");
const Tasks = require("./tasksModel");
const Resources = require("./resourcesModel");

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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const project = Projects.getProjectById(id);
  const tasks = Tasks.getTaskByProjectId(id);
  const resource = Resources.getResourceByProjectId(id);
  Promise.all([project, tasks, resource])
    .then(data => {
      res.status(200).json({
        ...data[0],
        tasks: data[1],
        resources: data[2]
      });
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/", async (req, res) => {
  try {
    const project = await Projects.insertProject(req.body);
    res.status(200).json({
      ...project,
      is_completed: project.is_completed === 0 ? false : true
    });
  } catch (error) {
    res.status(500).json({
      message: `There was an error saving the project: ${error.message}`
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.remove(id);
    res.status(200).json({ message: `Project ${id} has been deleted` });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `There wa a problem deleting project ${id}: ${error.message}`
      });
  }
});

module.exports = router;
