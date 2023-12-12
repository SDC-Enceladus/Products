const { Pool } = require('pg');
const config = require('../../server/config');

const pool = new Pool(config.database);

const insertData = async (csvFile, tableName) => {
  const client = await pool.connect();
  await client.query('BEGIN');
  await client.query(`COPY ${tableName} FROM '${csvFile}' DELIMITER ',' CSV HEADER NULL 'null'`);
  await client.query('COMMIT');
  client.release();
};

module.exports = insertData;
