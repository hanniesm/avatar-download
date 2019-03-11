var owner = process.argv.slice(2)[0];
var repo = process.argv.slice(2)[1];

// var url =

var request = require('request');
var fs = require('fs');

// so need it to

request.get('https://avatars2.githubusercontent.com/u/16829276?s=400&va=4')
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

// require `request` and the Node `fs` (filesystem) module
/*var request = require('request');
var fs = require('fs');

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
       .pipe(fs.createWriteStream('./future.jpg'));
                      // Note 4

*/