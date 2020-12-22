const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postNumber: {
        type: Number,
    },
    product:{
            type: Schema.Types.ObjectId,
            ref: "Product"
    },
    postee: 
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    viewers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
