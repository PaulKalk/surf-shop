const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  price: Number,
  images: [String],
  location: String,
  lag: Number,
  ltd: Number,
  description: String,
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
module.exports = mongoose.model("Post", PostSchema);
/* Post - string
Author - object (object id)
Price - number
Images - array of string
Location - string
lag - string
ltd- string
Description - string
 */
