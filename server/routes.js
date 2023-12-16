const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.products.getProducts);

router.get('/products/:id', controller.products.getProduct);

router.get('/products/:id/styles', controller.products.getStyles);
router.get('/products/:id/stylesNew', controller.products.getStylesNew);

router.get('/products/:id/related', controller.products.getRelated);

router.get('/loaderio-ba6d9bc647c859d4f7f60716bf7ae8d0', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', 'attachment; filename=token.txt');
  res.end('loaderio-ba6d9bc647c859d4f7f60716bf7ae8d0');
});

module.exports = router;
