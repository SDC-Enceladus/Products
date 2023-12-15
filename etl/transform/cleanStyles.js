const cleanCsv = require('./csvCleaner');

const oldFile = '/Products/oldcsvs/styles.csv';
const newFile = '/Products/newcsvs/styles.csv';
const requiredColumns = ['id', 'productId', 'name'];
const columnsToTrim = ['name'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
