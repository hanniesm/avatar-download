// var owner = process.argv.slice(2)[0];
// var repo = process.argv.slice(2)[1];

// var url =

var request = require('request');
console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_TOKEN = require('./secrets.js')
// console.log(GITHUB_TOKEN.GITHUB_TOKEN)


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${GITHUB_TOKEN.GITHUB_TOKEN}`
    },
  };

  request(options, function(err, res, body) {
    var users = JSON.parse(body);
    for (var each of users) {
      console.log(each.avatar_url)
    }
    cb(err, body);
  });

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  // console.log("Result:", result);
});



