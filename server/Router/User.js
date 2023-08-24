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

router.post('/saved', async (req, res) => {
    try{
        const user = await User.findOne({ uid: req.body.userId });
        console.log("Found user:", user);
        if(!user){
            res.status(404).send({message: 'User not found.'});
            return;
        }

        user.saved.push({content: req.body.content});
        await user.save();
        res.status(200).send(user.saved);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).send({ message: 'Error finding user.' });
    }
});

router.get('/saved/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findOne({ uid: userId });
        console.log("Found user:", user);
        
        if (!user) {
            res.status(404).send({ message: 'User not found.' });
            return;
        }
        res.status(200).send(user.saved);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).send({ message: 'Error finding user.' });
    }
});





module.exports = router;
