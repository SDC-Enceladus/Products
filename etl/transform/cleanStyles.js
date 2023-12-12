const cleanCsv = require('./csvCleaner');

const oldFile = '../../oldcsvs/styles.csv';
const newFile = '../../newcsvs/styles.csv';
const requiredColumns = ['id', 'productId', 'name'];
const columnsToTrim = ['name'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
