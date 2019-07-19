require('dotenv').config();

// Create Yoga-Express server
const createServer = require('./graphServer');
const server = createServer();

// ENV
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;

server.start(() => {
  console.log(`server is running on ${port}`);
});
