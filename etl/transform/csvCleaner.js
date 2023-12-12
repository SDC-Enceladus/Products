const fs = require('fs');
const fastcsv = require('fast-csv');
const { Transform } = require('stream');

const seenIDs = new Set();
const isUniqueID = (id) => (!seenIDs.has(id));
const addSeenID = (id) => (seenIDs.add(id));

const cleanCsv = (oldFile, newFile, requiredColumns, columnsToTrim, omitValue) => {
  const readStream = fs.createReadStream(oldFile);
  const writeStream = fs.createWriteStream(newFile);
  const parser = fastcsv.parse({
    headers: true,
    discardUnmappedColumns: true,
    strictColumnHandling: false,
    delimiter: ',',
    quote: '"',
    escape: '"',
  });
  const formatter = fastcsv.format({ headers: true });
  let rowsProcessed = 0;

  const rowsProcessedLogger = setInterval(() => {
    console.log(`${rowsProcessed} rows processed`);
  }, 5000);

  const preprocessTransform = new Transform({
    objectMode: true,
    transform: (chunk, encoding, callback) => {
      const processedChunk = chunk.toString().replace(/(,"[^"]*)\n/g, '$1"\n');
      callback(null, processedChunk);
    },
  });

  const transformStream = new Transform({
    objectMode: true,
    transform: (row, encoding, callback) => {
      const missingColumns = requiredColumns.filter((column) => {
        const value = row[column];
        return !value || value.trim() === '';
      });

      if (missingColumns.length === 0) {
        columnsToTrim.forEach((column) => {
          if (row[column]) {
            row[column] = row[column].trim();
          }
          if (row[column] === 'null') {
            row[column] = null;
          }
        });
        if (omitValue !== undefined) {
          if (row[omitValue.column] === omitValue.value) {
            console.log(`Skipped row ID: ${row.id} due to ${omitValue.column} being ${row[omitValue.column]}`);
            callback();
            return;
          }
        }
        const id = row.id;
        if (!isUniqueID(id)) {
          console.log(`Skipped row ID: ${id} due to ID being a duplicate`);
          callback();
          return;
        }
        addSeenID(id);
        rowsProcessed += 1;
        callback(null, row);
      } else {
        console.log(`Skipped row ID: ${row.id} due to empty column(s)`);
        callback();
      }
    },
  });

  readStream
    .pipe(preprocessTransform)
    .pipe(parser)
    .pipe(transformStream)
    .pipe(formatter)
    .pipe(writeStream)
    .on('finish', () => {
      clearInterval(rowsProcessedLogger);
      console.log('Completed data cleaning');
    });
};

module.exports = cleanCsv;
