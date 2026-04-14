const mongoose = require('mongoose');

const RelationSchema = new mongoose.Schema({
    source: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Argument',
        required: true
    },
    target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Argument',
        required: true
    },
    type: {
        type: String,
        enum: ['supports', 'attacks'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Relation', RelationSchema);