require('dotenv').config();
// const express = require('express');
// const app = express();

// Create Yoga-Express server
const createServer = require('./graphServer');
const server = createServer();

// ENV
const port = process.env.PORT || 7000;

server.start(() => {
  console.log(`server is running on ${port}`);
});
