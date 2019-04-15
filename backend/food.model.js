const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Food = new Schema({
    food_description: {
        type: String
    },
    food_responsible: {
        type: String
    },
    food_priority: {
        type: String
    },
    food_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Food', Food);