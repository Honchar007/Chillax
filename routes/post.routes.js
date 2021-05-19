const { Router } = require('express')
const router = Router()
const Post = require('../models/Post')
const User = require('../models/Users')

router.post('/useradd', async (req, res) => {
  try {
    const { nickName, email, instagram, github, telegram, photo, normalLevel } =
      req.body
    const user = new User({
      nickName,
      email,
      instagram,
      github,
      telegram,
      photo,
      normalLevel,
    })
    await user.save()
    res.json(user)
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

router.post('/add', async (req, res) => {
  try {
    const { title, city, text, imgUrl, bees, street, numberHouse, phone } =
      req.body
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
    res.redirect('/')
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

router.get('/user/:userid', async (req, res) => {
  try {
    const { userid } = req.params
    const user = await User.find({ github: userid })
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
  } catch (error) {
    console.log(error)
  }
})

router.get('/ownparties', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
