const { Schema, model } = require('mongoose')

const profileSchema = new Schema ({
  username: { type: String },
  wishlist: [{ type: Schema.Types.ObjectId, ref: "wishlist"}],
  cart: [{ type: Schema.Types.ObjectId, ref: "cart"}],
})

const Profile = model('profile', profileSchema)

module.exports = Profile 