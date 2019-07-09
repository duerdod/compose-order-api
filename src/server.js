require('dotenv').config();
const express = require('express');
const app = express();
const MongoClient = require('mongoose');
const port = process.env.PORT || 7000;
const connectionString = process.env.CONNECTION_STRING;

MongoClient.connect(connectionString, {
  useNewUrlParser: true
})
  .then(res => res)
  .catch(err => new Error(`No connected to db...) ${err}`));

const db = MongoClient.connection;

app.get('/', (request, response) => {
  response.send('yello');
  db.once('open', console.log('Connected'));
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
