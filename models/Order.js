const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    cakeName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    pickupDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Preparing", "Ready", "Collected"]
    }
});

module.exports = mongoose.model("Order", orderSchema);