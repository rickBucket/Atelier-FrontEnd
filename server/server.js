const express = require('express');
const helper = require('./apiHelper.js');

const app = express();
const port = 3000;

app.use(express.static('../client/dist'));
app.use(express.json());

app.get('/products', (req, res) => {
  helper.getProductData();
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
