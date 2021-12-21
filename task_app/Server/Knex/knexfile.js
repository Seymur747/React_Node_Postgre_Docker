 const keys=require('./../keys')
const knex=require('knex');
const { pgHOST, pgUser, pgPassword } = require('./../keys');
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host:     keys.pgHOST ||'localhost',
      user:     keys.pgUser|| 'postgres',
      database: keys.pgDatabase||'my_db',
      password: keys.pgPassword || 'SEYMUR951159',
      port:     keys.pgPort||5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
