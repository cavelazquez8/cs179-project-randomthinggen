const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
	role: String,
	content: String,
	uid: String,
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = { Chat };