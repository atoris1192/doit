const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.json({
    message: "the is articel api"
  })
})

module.exports = router