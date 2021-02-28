const axios = require('axios');
const config = require('../../config.js');

const getReviews = (req, res) => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=14296', {
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  })
    .then((results) => {
      console.log(results.data);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    })
);

const getReviewsMeta = (req, res) => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=14296', {
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  })
    .then((results) => {
      console.log(results.data);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log('REQUEEEEST', req);
      console.log(err);
      res.status(404);
    })
);

module.exports = {
  getReviews: getReviews,
  getReviewsMeta: getReviewsMeta
};
