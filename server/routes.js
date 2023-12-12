const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.products.getProducts);

router.get('/products/:id', controller.products.getProduct);

router.get('/products/:id/styles', controller.products.getStyles);

router.get('/products/:id/related', controller.products.getRelated);

module.exports = router;
