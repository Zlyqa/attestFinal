require('dotenv/config')
const PG = require('pg');
const Pool = PG.Pool;
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USER = process.env.DB_USER
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT

const pool = new Pool({
	database: DB_NAME,
	user: DB_USER,
	password: DB_PASSWORD,
	port: DB_PORT,
	host: DB_HOST,
});

module.exports = {pool}
