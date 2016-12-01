const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hobbie = require('../models/hobbies');

/* Data Getters From Server */
mongoose.connect('mongodb://localhost/hobbies');
var db = mongoose.connection;

router.get('/', (req, res) => {
    res.render('index', {
      brand: 'Itexico Test',
      css: '/css/style.css',
      src: '/bower_components/requirejs/require.js',
      req: '/require/config.js'
    });
});

// Getting Info
router.get('/api/hobbies', (req, res) => {
	Hobbie.getHobbies((err, hobbie) => {
		if(err){
			throw err;
		}
		res.json(hobbie);
	});
});

// Adding Info
router.post('/api/hobbies', (req, res) => {
	var hobbie = req.body;
	Hobbie.addHobbie(hobbie, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(hobbie);
	});
});

// Update Info
router.put('/api/hobbies/:_id', (req, res) => {
	var id = req.params._id;
	var hobbie = req.body;
	Hobbie.updateHobbie(id, hobbie, {}, (err, hobbie) => {
		if(err){
			throw err;
		}
		res.json(hobbie);
	});
});

// Delete Record
router.delete('/api/hobbies/:_id', (req, res) => {
	var id = req.params._id;
	Hobbie.removeHobbie(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});


module.exports = router;
