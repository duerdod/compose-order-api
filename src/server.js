require('dotenv').config();
const express = require('express');
const app = express();
const MongoClient = require('mongoose');
const cors = require('cors');

// ENV
const port = process.env.PORT || 7000;
const connectionString = process.env.CONNECTION_STRING;

// Routes
const { getProduct, getProducts } = require('./api/index');

// Enables CORS.
app.use(cors());

// Set up DB connection,
// Return a promise.
MongoClient.connect(connectionString, {
  useNewUrlParser: true
})
  .then(response => response)
  // This does not catch any networkerrors from MongoDB. Rewrite!
  // Steps to recreate:
  // 1. Remove white listning from MongoDB GUI.
  // 2. Now, no error logging.
  .catch(err => new Error(`No connected to db... \n ${err}`));

// This however returns an error when failing. Combine this and resvolver above?
const db = MongoClient.connection;
db.on('error', e => console.log(e));

// Exec on route '/'.
app.get('/', (request, response) => {});

// // Routes:
app.use('/api/products', (req, res) => {
  getProducts.getProducts(res);
});

app.use('/api/product/:id', (req, res) => {
  getProduct.getProduct(req, res);
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
