const express = require('express');
const app = express();
const port = 300;

app.get('/', (request, response) => {
    response.send('hello world. This is your first express app.');
 });

app.listen(port, () => {
    console.log(`This app is listen on port ${port}.`);
});
