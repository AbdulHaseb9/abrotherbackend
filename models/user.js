const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  emailorphone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const user = mongoose.model("User", UserSchema);

module.exports = user
