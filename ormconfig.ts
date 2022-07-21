import { DataSourceOptions } from 'typeorm';

const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts';

const config: DataSourceOptions[] = [
 {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.DB_NAME,
  entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/modules/**/infra/typeorm/entities/*.${ext}`],
  migrations: [`dist/shared/infra/typeorm/migrations/*.${ext}`],
 },
 {
  name: 'MongoDB',
  type: 'mongodb',
  host: process.env.DB_HOST,
  port: 27017,
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASS,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  useUnifiedTopology: true,
 },
];

export default config;
