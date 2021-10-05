export default {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_DOCKER_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: '',
  },
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_LOCAL_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: '',
  },
}
