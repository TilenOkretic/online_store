const enviroment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');

const env_config = config[enviroment];

const knex = require('knex');

const connection = knex(env_config);

module.exports = connection;