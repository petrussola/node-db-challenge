exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "build portfolio website",
          project_description:
            "Portfolio website is needed to show potential employers about my capabilities"
        },
        {
          project_name: "Find a job",
          project_description:
            "Once I graduate from Lambda I need to find a job as a developer"
        },
        {
          project_name: "Plan next year holidays",
          project_description:
            "This has been an intense year - I need holidays!!"
        },
      ]);
    });
};
