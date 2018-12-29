const express = require('express')
const router = express.Router()
const ArticleModel = require('../../models/ArticleModel')

router.delete('/:id', (req, res) => {
  const Articleid = req.params.id
  ArticleModel.remove({ _id: Articleid })
    .then(() => {
      res.json({ message: "Success" })
    })
})
router.get('/:id', (req, res) => {
  const Articleid = req.params.id
  ArticleModel
    .findById(Articleid, (err, article) => {
      res.json(article)
    })
})

router.get('/', (req, res) => {
  ArticleModel
    .find()
    .then(articles => {
      res.json(articles)
    })
})

router.post('/', (req, res) => {
  const Article = new ArticleModel()

  Article.title = req.body.title
  Article.text = req.body.text
  Article.setDate()

  Article.save(err => {
    if (err) {
      res.send(err)
    } else {
      res.json({ message: "Success!" })
    }
  })
})
router.get('/test', (req, res) => {
  res.json({
    message: "the is articel api"
  })
})

module.exports = router