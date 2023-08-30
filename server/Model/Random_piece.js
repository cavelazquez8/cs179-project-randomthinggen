const mongoose = require('mongoose');

const randomPieceSchema = new mongoose.Schema({
	role: String,
	content: String,
});

const RandomPiece = mongoose.model('RandomPiece', randomPieceSchema);

module.exports = { RandomPiece };
