var repoOwner = process.argv.slice(2)[0];
var repoName = process.argv.slice(2)[1];

var request = require('request');
var fs = require('fs');
console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_TOKEN = require('./secrets.js')
// console.log(GITHUB_TOKEN.GITHUB_TOKEN)


function getRepoContributors(repoOwner, repoName, cb) {
  if (repoOwner && repoName) {
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
        cb(each.avatar_url, `avatars/${each.login}.jpg`)
      }
      // cb(err, body);
    });

  } else {
    console.log("variables not defined");
  }
}


function downloadImageByURL(url, filePath) {

  request.get(url)
     .on('error', function (err) {                                   // Note 2
       throw err;
     })
     .on('response', function (response) {                           // Note 3
      console.log('Download complete')
    })

  .pipe(fs.createWriteStream(filePath));
}

// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")

getRepoContributors(repoOwner, repoName, downloadImageByURL)
