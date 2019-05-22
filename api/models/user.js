const mongoose = require("mongoose");
const bCrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  hash: { type: String, required: [true, "Password is required"] }
});

userSchema.methods.setPassword = function(password) {
  this.hash = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

userSchema.methods.validatePassword = function(password) {
  return bCrypt.compareSync(password, this.hash);
};

mongoose.model("user", userSchema);
