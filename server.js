const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const httpApp = express();
httpApp.use(bodyParser.json());
httpApp.use(bodyParser.urlencoded({
  extended: true
}));
httpApp.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
httpApp.get('*', function (req, res) {
  // console.log(req);
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

const httpServer = http.createServer(httpApp);

httpServer.listen(80, () => {
  console.log('HTTP Server running on port ' + 80);
});
