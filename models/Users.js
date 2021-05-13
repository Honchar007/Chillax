const { Schema, model } = require('mongoose')

const schema = new Schema({
  nickName: { type: String, required: true },
  email: { type: String, required: true },
  instagram: { type: String, required: false },
  github: { type: String, required: false },
  telegram: { type: Boolean, required: false },
  photo: { type: String, required: true },
  normalLevel: { type: Number, required: true },
})

module.exports = model('Users', schema)
