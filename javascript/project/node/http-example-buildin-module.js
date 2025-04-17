/** request method start */
// const http = require('node:http');
// const { request } = require('node:http');

// const req = request('http://www.google.com', function (res) {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: \n ${chunk}`);
//     });

//     res.on('end', () => { 
//         console.log('\n\nresponse has ended. ');
//     });
// });

// req.end();
/** request method end*/

/** get method  start*/
// const { get } = require('node:http');
const { get } = require('node:https');

get('https://www.google.com', function (res) {
    res.on('data', (chunk) => {
        console.log(`Data chunk: \n ${chunk}`);
    });

    res.on('end', () => { 
        console.log('\n\nresponse has ended. ');
    });
});
/** get method end*/