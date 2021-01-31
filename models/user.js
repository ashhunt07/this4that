const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {type: String, required: true},
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  traveldist: { type: String, required: false },
  paypaluser: {type: String, required: false},
  phone: {type: String, required: false},
  skills: {type:Array, required: false},
  reviews: {type:Array, required: false},
  photourl: {type:String, required: false},
  bio: {type:String, required: false},
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;