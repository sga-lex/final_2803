var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true,
    unique:true
  },
    username : {
      type: String,
      unique: true,
      required:true
    },
    score: {
      type: Number,
      default: 0
  }
});

userSchema.plugin(passportLocalMongoose);

module.exports = UserDetails = mongoose.model('UserDetails', userSchema);
