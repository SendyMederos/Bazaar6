const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true

    },
    password: {
        type: String
    },
    location:
    {
        street: {
            type: String
        },
        city:
        {
            type: String
        },
        state:
        {
            type: String

        },
        postcode:
        {
            type: String
        },
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            Ref: "Order"
        }
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Products"
        }
    ],
    wantedPosts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    budget: {
        type: Number,
        default: 0
    },
    amountSpent: {
        type: Number,
        default: 0
    }
});


// adds a method to a user document object to create a hashed password
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a user document object to check if provided password is correct
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed (or new),
// and if so, encrypt new password before saving:
UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this.generateHash(this.password)
        next()
    } else {
        next()
    }
})

const User = mongoose.model("User", UserSchema);


module.exports = User;