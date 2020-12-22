
import mongoose, { Schema } from 'mongoose';

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
                    type: Number
                },
            },
    orders: [
        {
            type: Schema.Types.ObjectId,
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

export const User = mongoose.model("User", UserSchema);


