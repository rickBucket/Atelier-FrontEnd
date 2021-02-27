const axios = require('axios');
const config = require('../../config.js');

const getQuestionableData = (req, res) => (
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/qa', {
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  })
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.status(404);
    })
);

module.exports = {
  getQuestionableData: getQuestionableData
};
