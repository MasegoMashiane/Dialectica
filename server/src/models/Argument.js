const mongoose = require('mongoose');

const ArgumentSchema = new mongoose.Schema({
    title: String,

    premises: [{
        type: String,
        required: true
    }],

    conclusion: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Argument', ArgumentSchema);