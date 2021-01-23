const express = require('express');

const app = express();

app.use(() => {
    console.log('Hello server...');
    console.log('Hello 2');
})

app.listen(4000);