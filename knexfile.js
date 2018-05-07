module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///coffee'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};