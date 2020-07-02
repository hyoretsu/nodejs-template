module.exports = [
 {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
   migrationsDir: './src/shared/infra/typeorm/migrations',
  },
 },
 {
  name: 'MongoDB',
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASS,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
 },
];
