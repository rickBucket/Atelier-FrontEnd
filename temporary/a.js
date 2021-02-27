/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

var fsAsync = Promise.promisifyAll(fs);
var request = Promise.promisifyAll(require('needle'));

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // async readFile and get the first line of the body
  return fsAsync.readFileAsync(readFilePath, 'utf-8')
    .then(data => {
      if (!data) {
        throw new Error('File doesn\'t exist');
      } else {
        return data.split('\n')[0];
      }
    })
    // then github api request for the profile
    .then(username => {
      return request.getAsync(
        `https://api.github.com/users/${username}`
      );
    })
  // then write the response to the writefile path
    .then(result => {
      return fsAsync.writeFileAsync(writeFilePath, JSON.stringify(result.body));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
