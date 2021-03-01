/* eslint-disable */
const path = require('path');
const express = require('express');
const products = require('./apiHelpers/productAPI.js');
const reviews = require('./apiHelpers/reviewAPI.js');

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

// Product API handler w/ optional q strings product_id and flag
// flag = "styles" or "related"
app.get('/products', (req, res) => {
  products.getProducts(req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/reviews', (req, res) => {
  reviews.getReviews(req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
