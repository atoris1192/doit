const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/v1/')

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