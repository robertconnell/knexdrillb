module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///knex_b'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};