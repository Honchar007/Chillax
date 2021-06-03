const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  text: { type: String, required: true },
  imgUrl: { type: String, required: true },
  bees: { type: Boolean, required: true },
  street: { type: String, required: true },
  numberHouse: { type: String, required: true },
  phone: { type: String, required: true },
  creator: { type: String, required: true },
  visitors: { type: Array, required: true },
})

module.exports = model('Post', schema)
