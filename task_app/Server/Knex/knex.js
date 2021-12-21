const env='development';
const config = require('./knexfile');  
const envconfig=config[env];
const knex=require('knex') ;
const connection=knex(envconfig)

module.exports = connection