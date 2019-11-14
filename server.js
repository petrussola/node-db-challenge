// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

// IMPORT ROUTERS
const projectsRouter = require("./helpers/projectsRouter");
const tasksRouter = require("./helpers/tasksRouter");
const resourcesRouter = require("./helpers/resourcesRouter");

// INSTANTIATE EXPRESS SERVER
const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTERS
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

// TESTING ENDPOINT

server.get("/", (req, res) => {
  res.status(200).json({ message: `Hello from test endpoint!` });
});

module.exports = server;
