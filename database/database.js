const mysql = require('mysql2/promise');
const db_config  = require('./db-config.json');

const pool = mysql.createPool({
    host: db_config.host,
    database: db_config.database,
    user: db_config.user,
    password: db_config.password
});

module.exports = pool;