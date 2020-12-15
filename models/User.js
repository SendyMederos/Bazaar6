const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName:{
    type: String,
  },
  email:{
    type: String,
    unique: true

  },
  phoneNumber:{
    type: Number,
    unique: true 
  },
  zipCode:{
    type: Number,
  },
  order:[
    {
      type:Schema.TypesObjectId,
      Ref: "Order"
    }
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
