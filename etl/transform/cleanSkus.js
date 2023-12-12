const cleanCsv = require('./csvCleaner');

const oldFile = '../../oldcsvs/skus.csv';
const newFile = '../../newcsvs/skus.csv';
const requiredColumns = ['id', 'styleId', 'size', 'quantity'];
const columnsToTrim = ['size'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
