import pg from "pg-hstore";
require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  dialectModule: pg,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
};