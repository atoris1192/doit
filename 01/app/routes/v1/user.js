const express = require('express')
const router = express.Router()
const UserModel = require('../../models/userModel')

router.put('/:id', (req, res) => {
  const Userid = req.params.id
  UserModel
    .findById(Userid, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        user.name = req.body.name
        user.screen_name = req.body.screen_name
        user.bio = req.body.bio
      }
      user.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.json({ message: "Success" })
        }
      })
    })

})
router.get('/:id', (req, res) => {
  const Userid = req.params.id
  UserModel
    .findById(Userid, (err, user) => {
      res.json(user)
    })

})
router.get('/', (req, res) => {
  UserModel
    .find()
    .then(users => {
      res.json(users)
    }) 
})
router.post('/', (req, res) => {
  const User = new UserModel()

  User.name = req.body.name
  User.screen_name = req.body.screen_name
  User.bio = req.body.bio

  User.save(err => {
    if (err) {
      res.send(err)
    } else {
      res.json({ message: "Success" })
    }

  })
})
router.get('/test', (req, res) => {
  res.json({
    message: "the is user api"
  })
})

module.exports = router