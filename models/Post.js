const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose'); 

const PostSchema = mongooose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts',PostSchema); 