const cleanCsv = require('./csvCleaner');

const oldFile = '../../oldcsvs/photos.csv';
const newFile = '../../newcsvs/photos.csv';
const requiredColumns = ['id', 'styleId'];
const columnsToTrim = ['feature'];

cleanCsv(oldFile, newFile, requiredColumns, columnsToTrim);
