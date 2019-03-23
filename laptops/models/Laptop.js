const mongoose = require('mongoose');

let LaptopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    created: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Laptop', LaptopSchema);