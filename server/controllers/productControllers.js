const axios = require('axios');
const config = require('../../config.js');

const getProductData = (req, res) => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  })
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
);

module.exports.getProductData = getProductData;
