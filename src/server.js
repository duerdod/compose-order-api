require('dotenv').config();
const express = require('express');
const app = express();
const MongoClient = require('mongoose');
const Products = require('./Schemas/Schema');
const cors = require('cors');

// ENV
const port = process.env.PORT || 7000;
const connectionString = process.env.CONNECTION_STRING;

app.use(cors());

MongoClient.connect(connectionString, {
  useNewUrlParser: true
})
  .then(res => {
    // console.log(res);
    return res;
  })
  .catch(err => new Error(`No connected to db... \n ${err}`));

// Not used
const db = MongoClient.connection;
db.on('error', e => console.log(e));

const getAllProducts = response => {
  Products.find((err, data) => {
    if (err) return response.json({ success: false, error: err });
    return response.json({ success: true, products: data });
  });
};

app.get('/', (request, response) => {
  getAllProducts(response);
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
