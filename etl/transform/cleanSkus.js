const cleanCsv = require('./csvCleaner');

const oldFile = '/usr/src/Products/oldcsvs/skus.csv';
const newFile = '/usr/src/Products/newcsvs/skus.csv';
const requiredColumns = ['id', 'styleId', 'size', 'quantity'];
const columnsToTrim = ['size'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
