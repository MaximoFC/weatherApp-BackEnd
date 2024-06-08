const { Schema, model } = require('mongoose');

const searchSchema = new Schema({
    search: {
        type: String,
        required: true
    }
});

module.exports = model('search', searchSchema);