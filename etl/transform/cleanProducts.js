const cleanCsv = require('./csvCleaner');

const oldFile = '/usr/src/Products/oldcsvs/product.csv';
const newFile = '/usr/src/Products/newcsvs/products.csv';
const requiredColumns = ['id', 'name'];
const columnsToTrim = ['name', 'slogan', 'description', 'category'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
