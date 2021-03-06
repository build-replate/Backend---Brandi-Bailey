const localPg = {
  host: 'localhost',
  database: 'productionDB',
  user: 'user',
  password: 'pass',
};

const productionDbConnection = process.env.DATABASE_URL || localPg;
// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/replate.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   },
    // },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/replateTest.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: productionDbConnection + '?ssl=true',
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};