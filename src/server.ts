import * as dotenv from 'dotenv'
dotenv.config()

import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import http from 'http'

import environment from '@helpers/get-environment'
const { localServerPort: port } = environment()

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('json replacer', (k: any, v: any) => (v === null ? undefined : v))
app.set('port', port)

app.get('/', (req, res) => res.send('Express + TypeScript Server'))

// Listen
server.listen(port)
server.on('listening', () =>
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
)
