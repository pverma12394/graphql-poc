const mongoose = require('mongoose')
const logger = require('./logger.js')

const mongoDB = 'mongodb://admin:pass@127.0.0.1:27017/4basecare-db'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.once('open', function() {
  logger.info('Connected to a DB')
})

db.on('error', () => {
  logger.error('MongoDB connection error')
})