var express = require('express');
var router = express.Router();

const { User } = require('../Model/User.js');

router.post('/register', (req, res) => {
	console.log(req.body);
	const userData = new User(req.body);
	userData
		.save()
		.then(() => {
			res.status(200).json({ success: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});

router.post('/history', (req, res) => {
    const userId = req.body.userId;
    const contentItem = req.body.content;

    User.findById(userId, (err, user) => {
        if (err) {
            res.status(500).send({ message: 'Error finding user.' });
            return;
        }

        if (!user) {
            res.status(404).send({ message: 'User not found.' });
            return;
        }

        // Add the content to the user's history
        user.history.push(contentItem);
        user.save(err => {
            if (err) {
                res.status(500).send({ message: 'Error saving user history.' });
                return;
            }

            res.status(200).send({ message: 'Content saved to user history.' });
        });
    });
});
router.get('/history/:userId', (req, res) => {
    const userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) {
            res.status(500).send({ message: 'Error finding user.' });
            return;
        }

        if (!user) {
            res.status(404).send({ message: 'User not found.' });
            return;
        }

        res.status(200).send(user.history);
    });
});


module.exports = router;
