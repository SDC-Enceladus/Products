const cleanCsv = require('./csvCleaner');

const oldFile = '/usr/src/Products/oldcsvs/photos.csv';
const newFile = '/usr/src/Products/newcsvs/photos.csv';
const requiredColumns = ['id', 'styleId'];
const columnsToTrim = ['feature'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
