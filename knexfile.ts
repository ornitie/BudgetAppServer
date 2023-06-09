module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5444,
        user: 'budget_server',
        password: 'budget_server_password',
        database: 'budget_server',
      },
      migrations: {
        directory: './src/migrations',
      },
    },
  };
  