import { Sequelize } from 'sequelize'

import getEnvironment from '@helpers/get-environment'

const config = getEnvironment()
const sequelize = new Sequelize({
  host: config.host,
  port: +config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  dialect: config.dialect,
  retry: {
    max: 999,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
} as any)

const db = { sequelize, Sequelize }

export default db
