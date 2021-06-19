/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const http = require('http');
const path = require('path');

const httpApp = express();

httpApp.use(express.static(path.join(__dirname, './build')));

httpApp.use(express.json());
httpApp.use(
  express.urlencoded({
    extended: true,
  }),
);

httpApp.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

httpApp.get('*', (req, res) => {
  // console.log(req);
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

const httpServer = http.createServer(httpApp);

httpServer.listen(80, () => {
  console.log(`HTTP Server running on port ${80}`);
});
