const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: String,
	displayName: String,
	uid: String,
    saved: [{
    content: String,
    date: { type: Date, default: Date.now }
    }],
    history: [{
    content: String,
    date: { type: Date, default: Date.now }
    }]


});

const User = mongoose.model('User', userSchema);

module.exports = { User };
