// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:///highlonesome100'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
