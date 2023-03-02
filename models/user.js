const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 8

const userSchema = new Schema ({
  profilePicture: { type: String}, 
  username: { 
    type: String, 
    required: true,
    unique: true, 
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  }
}, {
  timestamps: true,
  toJSON: {
    transform (doc, ret) {
      delete ret.password
      return ret
    }
  }
})

userSchema.pre('save', async function (next) {
  if(!this.isModified('password'))
    return next()
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

module.exports = model('User', userSchema)