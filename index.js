const express = require('express');
const app = express();

const expressSession = require('express-session');

const parser = require('body-parser');
app.use(parser.json());

app.use('/', express.static('./public'));


// app.get('/', (request, response) => {
// 	response.send()

app.listen(3004, () => {
  console.log('Node is listening to port 3004')
  });
