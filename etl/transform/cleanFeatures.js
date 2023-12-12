const cleanCsv = require('./csvCleaner');

const oldFile = '../../oldcsvs/features.csv';
const newFile = '../../newcsvs/features.csv';
const requiredColumns = ['id', 'product_id', 'feature'];
const columnsToTrim = ['feature'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
