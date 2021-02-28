/* eslint-disable */
const axios = require('axios');
const config = require('../../config.js');

const getProducts = (product_id = '', flag = '', callback) => {
  if (product_id !== '') {
    product_id = '/' + product_id;
  }
  if (flag !== '') {
    flag = '/' + flag;
  }
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products${product_id + flag}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  })
    .then((results) => {
      callback(null, results.data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports.getProducts = getProducts;
