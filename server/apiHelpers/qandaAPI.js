/* eslint-disable */
// TODO GET + POST + PUT
const axios = require("axios");
const config = require("../../config.js");

const handleQStrings = (input, flag = "") => {
  if (input === undefined) {
    return "";
  } else {
    if (flag) {
      return `${flag}=${input}`;
    }
    return "/" + input;
  }
};

const getQuestions = (q, callback) => {
  q.product_id = handleQStrings(q.product_id, "?product_id");  // /q.product_id
  q.flag = handleQStrings(q.flag);              // /q.flag
  q.page = handleQStrings(q.page, "&page");      // page=q.page
  q.count = handleQStrings(q.count, "&count");   // count=q.count

  var query = q.product_id + q.page + q.count;

  if (q.question_id) {
    if (q.page) {
      q.page = "/?" + q.page;
      if (q.count) {
        q.count = "&" + q.count;
      }
    } else {
      if (q.count) {
        q.count = "/?" + q.count;
      }
    }
    query = '/' + q.question_id + '/answers/' + q.page + q.count;
  }

  axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions${
        query
      }`,
      {
        headers: {
          "User-Agent": "request",
          Authorization: config.API_KEY,
        },
      }
    )
    .then((results) => {
      callback(null, results.data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const putQuestions = (q, callback) => {
  if (q.question_id) {
    q.question_id = 'questions/' + q.question_id
  } else{
    q.question_id = '';
  }

  if (q.answer_id) {
    q.answer_id = 'answers/' + q.answer_id
  } else {
    q.answer_id = '';
  }

  axios.put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/${
        q.question_id + q.answer_id + '/' + q.flag
      }`,
      {
        headers: {
          "User-Agent": "request",
          Authorization: config.API_KEY,
        },
      }
    )
    .then((results) => {
      callback(null, results.data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const postQuestions = (q, callback) => {

  //add a query string to specify whether it is an answer or question being posted.

  axios.post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions`, q,
      {
        headers: {
          Authorization: config.API_KEY,
        },
      }
    )
    .then((results) => {
      console.log(results)
      callback(null, results.data);
    })
    .catch((err) => {
      console.log(err)
      callback(err, null);
    });
};

module.exports.getQuestions = getQuestions;
module.exports.putQuestions = putQuestions;
module.exports.postQuestions = postQuestions;
