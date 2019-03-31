let mongoose = require('mongoose');

let documents = mongoose.Schema({
    documents:[{
        name: {
            type: String
        },
        path: {
            type: String
        }   
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status:{
        type: Number
    }
})

module.exports = mongoose.model('Documents', documents);