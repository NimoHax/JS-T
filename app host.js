const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(new Date() + " Ping Received");
  response.sendStatus(200);
});
app.listen(3000);
setInterval(() => {
  http.get(`http://<#You Projects Name>.glitch.me/`);
}, 280000);

#glitch.com App satup By Uptime Robot.com 
