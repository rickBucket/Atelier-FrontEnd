const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers.js');

// GET all products
router.get('/', productController.getProductData);

module.exports = router;