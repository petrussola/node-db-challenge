const db = require("../data/db-config");

module.exports = {
  getTasks,
  getTaskById,
  insertTask
};

function getTasks() {
  return db("tasks");
}

function getTaskById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function insertTask(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getTaskById(ids[0]);
    });
}
