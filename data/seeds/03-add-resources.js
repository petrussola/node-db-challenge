exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "money" },
        { resource_name: "time" },
        { resource_name: "patience" },
        {
          resource_name: "family meeting",
          resource_description: "need to agree with family members"
        }
      ]);
    });
};
