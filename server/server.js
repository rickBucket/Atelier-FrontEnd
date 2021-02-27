const path = require('path');
const express = require('express');
const routes = require('./router');

const app = express();
const port = 3000;

// Static Middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

// Parse
app.use(express.json());

// Routes
app.use('/products', routes.productRoutes);
app.use('/reviews', routes.reviewsRoutes);
app.use('/qa', routes.questionsRoutes);
app.use('/cart', routes.cartRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
