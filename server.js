const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const router = require('./routes/routes.js')

app.use('/', router.services)

app.listen(port, ()=> {
  console.log(`Listening on ${port}`)
});