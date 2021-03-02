/* eslint-disable */
const path = require('path');
const express = require('express');
const products = require('./apiHelpers/productAPI.js');
const reviews = require('./apiHelpers/reviewAPI.js');
const questions = require('./apiHelpers/qandaAPI.js');

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
  console.log('query request', req.query);
  reviews.getReviews(req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/reviews', (req, res) => {
  console.log('post body', req.body);
  reviews.postReviews(req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/qa/questions', (req, res) => {
  questions.getQuestions(req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data)
    }
  })
});

app.post('/qa/questions', (req, res) => {
  questions.postQuestions(req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data)
    }
  })
})

app.put('/qa/questions', (req, res) => {
  questions.putQuestions(req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data)
    }
  })
});

app.put('qa/questions', (req, res) => {
  questions.putQuestions(req.query, (err, data))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
