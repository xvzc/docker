const express = require('express');
const redis = require('redis');

const client = redis.createClient({
    host: "redis-server",
    port: 6379
})

const app = express();

client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        client.set("number", parseInt(number)+ 1);
        res.send("Number is increasing by 1, number : " + number);
    });
})
app.listen(8080);

console.log('Server is running');
