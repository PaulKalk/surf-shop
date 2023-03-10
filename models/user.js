const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  image: String,
  email: String,
  posts: [
    {
      type: Schema.Types.ObjectID,
      ref: "Post",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
