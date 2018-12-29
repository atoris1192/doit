
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)

router.use((req, res, next) => {
  console.info('Something is happening.')
  next()
})

router.get('/', (req, res) => {
  res.json({ message: "Succesfullt /api a test message."})
})


app.listen(port)
console.info('listen on port: ' + port)
