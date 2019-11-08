// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

// INSTANTIATE EXPRESS SERVER
const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTERS

// TESTING ENDPOINT

server.get("/", (req, res) => {
  res.status(200).json({ message: `Hello from test endpoint!` });
});

module.exports = server;
