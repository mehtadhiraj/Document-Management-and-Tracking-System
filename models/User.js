let mongoose = require('mongoose');
let passportLocalMongoose = require("passport-local-mongoose");
let userSchema = mongoose.Schema({
	name: {
		type: String,
		default: 'Anonymous'
	},
	email: {
		type: String,
		required: true
	},
	contact: {
		type: Number,
		minlength: 10,
		maxlength: 10
	},
	role: {
		type: String,
		enum: ['user', 'admin']
	},
	gender: {
		type: String,
		enum: ['male', 'female']
	},
	dob: {
		type: Date
    },
    password: {
        type: String
    }
},{
    timestamp: true
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);	