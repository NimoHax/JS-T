const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(new Date() + " Ping Received");
  response.sendStatus(200);
});
app.listen(3000);
setInterval(() => {
  http.get(`http://music-x.glitch.me/`);
}, 280000);
