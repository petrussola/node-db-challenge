const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectById,
  insertProject,
  remove
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function insertProject(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return getProjectById(id[0]);
    });
}

function remove(id) {
    return db('projects').where({id}).del();
}
