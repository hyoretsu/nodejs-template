import { ConnectionOptions } from 'typeorm';

const host = 'localhost';
const migrationsDir = './src/shared/infra/typeorm/migrations';

const config: ConnectionOptions[] = [
 {
  name: 'default',
  type: 'postgres',
  host,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: [`${migrationsDir}/*.ts`],
  cli: {
   migrationsDir,
  },
 },
 {
  name: 'MongoDB',
  type: 'mongodb',
  host,
  port: 27017,
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASS,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  useUnifiedTopology: true,
 },
];

export default config;
