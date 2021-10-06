import * as dotenv from 'dotenv'
dotenv.config()

import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import http from 'http'

import environment from '@helpers/get-environment'
import database from '@models/index'

const app = express()
const server = http.createServer(app)

// Sequelize config
database.sequelize.sync().catch((e) => console.error(e))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('json replacer', (k: any, v: any) => (v === null ? undefined : v))

app.get('/', (req, res) => res.send('Express + TypeScript Server'))

// Listen
const { localServerPort: port } = environment()
app.set('port', port)
server.listen(port)
server.on('listening', () =>
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
)
