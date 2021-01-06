const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    // postNumber: {
    //     type: Number,
    // },
    productName: {
        type: String,
    },
    price:
    {
        type: Number
    },
    category: {
        type: String
    },
    notes: {
        type: String
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
