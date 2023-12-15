const cleanCsv = require('./csvCleaner');

const oldFile = '/usr/src/Products/oldcsvs/features.csv';
const newFile = '/usr/src/Products/newcsvs/features.csv';
const requiredColumns = ['id', 'product_id', 'feature'];
const columnsToTrim = ['feature'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
