/* eslint-disable */
const axios = require('axios');
const config = require('../../config.js');

const handleQStrings = (input, flag = '') => {
  if (input === undefined) {
    return '';
  } else {
    if (flag) {
      return `/?${flag}=${input}`;
    }
    return '/' + input;
  }
};

const getProducts = (q, callback) => {
  q.product_id = handleQStrings(q.product_id);
  q.flag = handleQStrings(q.flag);
  q.page = handleQStrings(q.page, 'page');
  q.count = handleQStrings(q.count, 'count');

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products${q.product_id + q.flag + q.page + q.count}`, {
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
