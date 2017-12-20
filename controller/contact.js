const express = require('express');
const router = express.Router();
const contactModel = require('../model/contact');

router.post('/', (req,res) => {
	console.log(req.body);
	let con = new contactModel({
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
    });
	contactModel.addContact(con,(err) => {
        if(!err)
            res.json({success:true, message: "Message sent successfully."});
        else
            res.json({success: false, message: `Failed to send message. Error: ${err}`}); 
	});
});



module.exports = router;
