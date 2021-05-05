const { Router } = require('express')
const router = Router()
const Post = require('../models/Post')

router.post('/add', async (req, res) => {
  try {
    const {
      title,
      city,
      text,
      imgUrl,
      bees,
      street,
      numberHouse,
      phone,
    } = req.body
    const post = new Post({
      title,
      city,
      text,
      imgUrl,
      bees,
      street,
      numberHouse,
      phone,
    })
    await post.save()
    res.json(post)
  } catch (error) {
    console.log(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
