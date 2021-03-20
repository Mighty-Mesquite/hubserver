const express = require('express');

// Required Files
const controller = require ('./controller.js')

// Create a New Router Object
var services = express.Router();

// Route a GET request
services.get('/', controller.productsService)

module.exports = {
  services: services,
}