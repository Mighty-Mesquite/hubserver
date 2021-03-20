const express = require('express');

// Required Files
const controller = require ('../controllers/productController.js')

// Create a New Router Object
var services = express.Router();

// Products
services.get('/products', controller.productsService)
services.get('/products/:product_id', controller.productsService)
services.get('/products/:product_id/styles', controller.productsService)
services.get('/products/:product_id/related', controller.productsService)

// Reviews

// Questions & Answers

module.exports = {
  services: services,
}