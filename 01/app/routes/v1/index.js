const express = require('express')
const router = express.Router()

router.use('/article', require('./article.js'))
router.use('/user', require('./user.js'))

router.get('/', (req, res) => {
  res.json({ message: "-- api/v1/index --"})
})
module.exports = router
