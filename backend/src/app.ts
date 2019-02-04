import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const indexRouter = require('./routes')
const usersRouter = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'dist', 'my-app')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app
