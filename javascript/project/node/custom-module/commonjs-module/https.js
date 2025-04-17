// const request = require('./request.js');
// const response = require('./response');

// function communicate() {
//     request.send('What is the name of your country?');
//     response.receive('Bangladesh')
// }

const { send } = require('./request.js');
const { receive } = require('./response.js');

function communicate() {
    send('What is the name of your country?');
    receive('Bangladesh')
}

communicate()
