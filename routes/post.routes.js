const { Router } = require('express')
const router = Router()
const Post = require('../models/Post')

router.post('/add', async (req, res) => {
  try {
    const { text, title, imgUrl } = req.body
    const post = new Post({
      title,
      text,
      imgUrl,
    })
    await post.save()
    res.json(post)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
