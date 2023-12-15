const cleanCsv = require('./csvCleaner');

const oldFile = '/usr/src/Products/oldcsvs/related.csv';
const newFile = '/usr/src/Products/newcsvs/relatedProducts.csv';
const requiredColumns = ['id', 'current_product_id', 'related_product_id'];
const columnsToTrim = [];
const omitValue = { column: 'related_product_id', value: '0' };

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim, omitValue);
