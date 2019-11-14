exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("project_name", 128).notNullable();
      table.text("project_description");
      table.boolean("is_completed").defaultTo(false);
    })
    .createTable("tasks", table => {
      table.increments();
      table.string("task_description").notNullable();
      table.text("task_notes");
      table.boolean("is_completed").defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("resources", table => {
      table.increments();
      table
        .string("resource_name")
        .notNullable()
        .unique();
      table.text("resource_description");
    })
    .createTable("projectsResources", table => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projectsResources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources");
};
