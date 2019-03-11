var owner = process.argv.slice(2)[0];
var repo = process.argv.slice(2)[1];


/*
var request = require('request');
var fs = require('fs');

// so need it to

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Status Message: ', response.statusMessage);
        console.log('Response Headers: ', response.header)
        console.log('Download complete')
       })
       .pipe(fs.createWriteStream('./avatars'));
                      // Note 4


module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    var information = "";
    for (chunk in data) {
      information += data[chunk]
    }
    callback(information);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

};
*/