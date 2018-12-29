const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/v1/')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ExpressAPI')
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ') + err
  PerformanceObserverEntryList.exit(-1)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/v1/', router)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Server start')
})
// app.get('/api/v1/', (req, res) => {
//   res.json({ message: "hello world"})
// })

app.listen(port, () => {
  console.log("Server listing port : " + port);
  
})