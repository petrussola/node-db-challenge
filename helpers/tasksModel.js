const db = require("../data/db-config");

module.exports = {
  getTasks,
  getTaskById,
  insertTask,
  getTaskByProjectId
};

function getTasks() {
  return db
    .select(
      "t.id",
      "t.task_description",
      "t.task_notes",
      "t.is_completed",
      "p.project_name"
    )
    .from("tasks as t")
    .join("projects as p", "t.project_id", "p.id");
}

function getTaskById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function getTaskByProjectId(projectid) {
  return db("tasks").where("project_id", projectid);
}

function insertTask(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getTaskById(ids[0]);
    });
}
