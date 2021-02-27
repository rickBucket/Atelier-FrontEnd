/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback = () => {}) {
  // TODO
  fs.readFile(filePath, 'UTF-8', (err, data)=> {
    if (err) {
      console.log('hi')
    } else {
      callback(null, data.split('\n').shift());
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback = () => {}) {
  // TODO

  request.get(url, (err, response, body) => {
    if (err) {

    } else {
      callback(null, response.statusCode);
    }
  });

};



// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
