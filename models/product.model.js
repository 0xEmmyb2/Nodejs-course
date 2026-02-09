const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter the product name"]
    },

    quantity : {
        type: Number,
        required: true,
        default: 0
    },
    
});