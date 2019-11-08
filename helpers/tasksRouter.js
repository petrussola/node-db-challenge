const express = require("express");
const Tasks = require("./tasksModel");

const router = express.Router();

// ENDPOINTS

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.getTasks();
    res.status(200).json(
      tasks.map(item => {
        return {
          ...item,
          is_completed: !item.is_completed ? false : true
        };
      })
    );
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const task = await Tasks.insertTask(req.body);
    res
      .status(200)
      .json({ ...task, is_completed: !task.is_completed ? false : true });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Tasks could not be saved: ${error.message}` });
  }
});

module.exports = router;
