const mongoose = require('mongoose');

var keySchema = new mongoose.Schema({
    key: {
        type: String,
        required: 'This field is required'
    }
})

mongoose.model('key', keySchema);