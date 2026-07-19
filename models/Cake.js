const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema({
    cakeName: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    available: {
        type: Boolean,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model("Cake", cakeSchema);