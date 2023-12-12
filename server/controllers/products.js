const models = require('../models');

module.exports = {
  getProducts: (req, res) => {
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    models.products.getProducts(page, count)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch(() => {
        res.status(500).send('SERVER ERROR');
      });
  },
  getProduct: (req, res) => {
    let dataToSend = {};
    models.products.getProductInfo(req.params.id)
      .then((productData) => {
        dataToSend = productData.rows[0];
        models.products.getProductFeatures(req.params.id)
          .then((featuresData) => {
            dataToSend.features = featuresData.rows;
            res.status(200).send(dataToSend);
          });
      })
      .catch(() => {
        res.status(500).send('SERVER ERROR');
      });
  },
  getStyles: (req, res) => {
    const results = { product_id: req.params.id };
    models.products.getStyles(req.params.id)
      .then((stylesData) => {
        results.results = stylesData.rows;
        const photoPromises = results.results.map((row) => models.products.getPhotos(row.style_id));
        const skuPromises = results.results.map((row) => models.products.getSkus(row.style_id));
        Promise.all(photoPromises.concat(skuPromises))
          .then((values) => {
            for (var i = 0; i < photoPromises.length; i++) {
              results.results[i].photos = values[i].rows;
            }
            for (var j = 0; j < skuPromises.length; j++) {
              results.results[j].skus = {};
              for (var k = 0; k < values[j + photoPromises.length].rows.length; k++) {
                results.results[j].skus[values[j + photoPromises.length].rows[k].id] = {
                  quantity: values[j + photoPromises.length].rows[k].quantity,
                  size: values[j + photoPromises.length].rows[k].size,
                };
              }
            }
            res.status(200).send(results);
          });
      })
      .catch(() => {
        res.status(500).send('SERVER ERROR');
      });
  },
  getRelated: (req, res) => {
    models.products.getRelated(req.params.id)
      .then((relatedData) => {
        const relatedIds = relatedData.rows.map((row) => row.related_product_id);
        res.status(200).send(relatedIds);
      })
      .catch(() => {
        res.status(500).send('SERVER ERROR');
      });
  },
};
