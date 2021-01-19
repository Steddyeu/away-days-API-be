const ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

const customConfigs = {
  development: { connection: { database: 'away_days' } },
  test: { connection: { database: 'away_days_test' } },
};

module.exports = { ...baseConfig, ...customConfigs[ENV] };
