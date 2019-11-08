const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  insertResource,
  getResourceByProjectId
};

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function getResourceByProjectId(projectid) {
  return db
    .select("r.id", "r.resource_name", "r.resource_description")
    .from("resources as r")
    .join("projectsResources as rp", "r.id", "rp.resource_id")
    .join("projects as p", "p.id", "rp.project_id")
    .where("p.id", projectid);
}

function insertResource(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return getResourceById(ids[0]);
    });
}
