
const express = require('express');

const PORT = 8080;
const HOST = "0.0.0.0"

const app = express();
app.get('/', (_, res) => {
    res.send("Hello World");
});


app.listen(PORT, HOST);
