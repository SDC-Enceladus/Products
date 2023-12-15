const cleanCsv = require('./csvCleaner');

const oldFile = 'home/ubuntu/Products/oldcsvs/styles.csv';
const newFile = 'home/ubuntu/Products/newcsvs/styles.csv';
const requiredColumns = ['id', 'productId', 'name'];
const columnsToTrim = ['name'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
