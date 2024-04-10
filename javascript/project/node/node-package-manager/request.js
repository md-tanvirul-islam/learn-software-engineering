const axios = require('axios');

const url = 'https://www.google.com';

axios.get(url).
    then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    }).then(() => {
        console.log('Finally done, Bro!');
    });