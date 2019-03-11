var repoOwner = process.argv.slice(2)[0];
var repoName = process.argv.slice(2)[1];
var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_TOKEN = require('./secrets.js')

function getRepoContributors(repoOwner, repoName, cb) {
  if (repoOwner && repoName) { //checks that there is data in the repoOwner and repoName. If not tells user what they're doing wrong.
    var options = {
      url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${GITHUB_TOKEN.GITHUB_TOKEN}`
      },
    };

//loops through each user object in body and cb the function
    request(options, function(err, res, body) {
      var users = JSON.parse(body);
      for (var each of users) {
        cb(each.avatar_url, `avatars/${each.login}.jpg`)
      }
    });
  } else {
    console.log("Need to enter repoOwner and repoName in node");
  }
}

//gets parameters from the getRepoContributors function
function downloadImageByURL(url, filePath) {
  request.get(url)
     .on('error', function (err) {
       throw err;
     })
     .on('response', function (response) {
      console.log('Download complete')
    })

  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(repoOwner, repoName, downloadImageByURL)
