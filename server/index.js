const express = require('express');
const bodyParser = require('body-parser');
// const sha256 = require('js-sha256');
// const db = require('../database-mongo');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3001, () => {
  console.log('listening on port 3001!');
});