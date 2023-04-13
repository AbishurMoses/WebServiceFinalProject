import { Options } from '@mikro-orm/core';
import * as dotenv from "dotenv"

dotenv.config({
  path: `./${process.env.NODE_ENV}.env`
}) // sets up dotenv to pull from our enviroment file

console.log(`${process.env.DB_NAME}, meant to be DB_NAME`)
console.log(`${process.env.DB_USER}, meant to be DB_USER`)
console.log(`${process.env.NODE_ENV}, NODE_ENV`)
const config = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  // dbName: process.env.DB_NAME, does not work for some reason. Have to specify as dbName: "books",
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  type: 'mysql',
  port: +(process.env.DB_PORT as string) || 3308,
  debug: true,
} as Options;

export default config;