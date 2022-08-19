const fs = require('fs');
const key = fs.readFileSync('localhost.decrypted.key');
const cert = fs.readFileSync('localhost.crt');
//docker run --name express_1 -v C:\openssl\nodejs_express_https:/usr/share/ -d -p 443:443 node

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world! We are running under HTTPS! On a container! We are safe on WEB.');
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 443;
server.listen(port, () => {
  console.log(`Server is listening over HTTPs on https://localhost:${port}`);
});