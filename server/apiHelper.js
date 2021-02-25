const axios = require('axios');
const API_KEY = require('../config.js');

const getData = () => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/', {
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${API_KEY}`,
    },
  })
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    })
);

module.exports.getData = getData;
