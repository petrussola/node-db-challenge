const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  insertResource
};

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function insertResource(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return getResourceById(ids[0]);
    });
}
