const mongoose = require('mongoose');

const chat_no_ai_Schema = new mongoose.Schema({
	role: String,
	content: String,
	uid: String,
});

const Chat_no_ai = mongoose.model('Chat_no_ai', chat_no_ai_Schema);

module.exports = { Chat_no_ai };