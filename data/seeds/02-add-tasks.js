exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "Find a model template",
          task_notes: "Surf the web for good template websites",
          project_id: 1
        },
        {
          task_description: "Find a quiet week",
          task_notes: "Can't build with Lambda going on",
          project_id: 1
        },
        {
          task_description: "Complete career assignments",
          task_notes: "Need Lambda endorsement",
          project_id: 2
        },
        {
          task_description: "Connect relevant folks Linkedin",
          task_notes: "Networking is important",
          project_id: 2
        },
        {
          task_description: "Apply for jobs",
          task_notes: "as many relevant jobs as possible",
          project_id: 2
        },
        {
          task_description: "Find destination",
          task_notes: "need to discuss with family",
          project_id: 3
        },
        {
          task_description: "All inclusive?",
          task_notes: "do we want all inclusive or self serve?",
          project_id: 3
        },
        {
          task_description: "Book holidays",
          task_notes: "Find a destination and book",
          project_id: 3
        }
      ]);
    });
};
