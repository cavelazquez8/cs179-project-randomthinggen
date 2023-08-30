var express = require('express');
var router = express.Router();

const { RandomPiece } = require('../Model/Random_piece');

router.post('/post_piece', async (req, res) => {
	console.log(req.body);
	const piece = new RandomPiece({
		role: req.body.role,
		content: req.body.message,
	});
	const random_piece = await RandomPiece.findOne({
		content: req.body.message,
		role: req.body.role,
	});
	const random_piece2 = await RandomPiece.findOne({
		content: 'asdfgg',
		role: req.body.role,
	});
	if (random_piece !== null) {
		console.log('Return?');
		return;
	}
	console.log('random1: ', random_piece);
	console.log('random2: ', random_piece2);
	piece
		.save()
		.then(() => {
			res.status(200).json({ success: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});

router.get('/get_piece', async (req, res) => {
	try {
		console.log('Serverside: ', req.query.role);
		//console.log('Serverside: ', req.body.uid);
		const randome_piece = await RandomPiece.aggregate([
			{ $match: { role: req.query.role } },
			{ $sample: { size: 1 } },
		])
			.exec()
			.then((piece) => {
				res.status(200).json({ success: true, post: piece });
			});
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'server error' });
	}
});

module.exports = router;
