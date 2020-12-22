const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderNumber: {
        type: String,
    },
    sender: 
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    receiver:
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
