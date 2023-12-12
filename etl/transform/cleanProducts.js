const cleanCsv = require('./csvCleaner');

const oldFile = '../../oldcsvs/product.csv';
const newFile = '../../newcsvs/products.csv';
const requiredColumns = ['id', 'name'];
const columnsToTrim = ['name', 'slogan', 'description', 'category'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
