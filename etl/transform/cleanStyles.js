const cleanCsv = require('./csvCleaner');

const oldFile = '/usr/src/Products/oldcsvs/styles.csv';
const newFile = '/usr/src/Products/newcsvs/styles.csv';
const requiredColumns = ['id', 'productId', 'name'];
const columnsToTrim = ['name'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
