/* eslint-disable */
const axios = require('axios');
const config = require('../config.js');

const getProductData = () => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  })
    .then((results) => {
      console.log(results.data);
    })
    .catch((err) => {
      console.log(err);
    })
);

module.exports.getProductData = getProductData;
