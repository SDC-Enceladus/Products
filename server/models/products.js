const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config.database);

module.exports = {
  getProducts: (page, count) => pool.query(`SELECT * FROM products LIMIT ${count} OFFSET ${count * (page - 1)}`),
  getProductInfo: (id) => pool.query(`SELECT * FROM products WHERE id = '${id}'`),
  getProductFeatures: (id) => pool.query(`SELECT name as feature, value FROM features WHERE product_id = '${id}'`),
  getStyles: (id) => pool.query(`SELECT id as style_id, name, original_price, sale_price, is_default as "default?" FROM styles WHERE product_id = '${id}'`),
  getPhotos: (id) => pool.query(`SELECT thumbnail_url, url FROM photos WHERE style_id = '${id}'`),
  getSkus: (id) => pool.query(`SELECT id, quantity, size FROM skus WHERE style_id = '${id}'`),
  getRelated: (id) => pool.query(`SELECT related_product_id FROM related_products WHERE current_product_id = '${id}'`),
};
