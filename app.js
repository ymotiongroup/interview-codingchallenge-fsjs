const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Hobbie = require('./models/hobbies');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hobbies');
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('hola');
});

// Getting Info
app.get('/api/hobbies', (req, res) => {
	Hobbie.getHobbies((err, hobbie) => {
		if(err){
			throw err;
		}
		res.json(hobbie);
	});
});

// Adding Info
app.post('/api/hobbies', (req, res) => {
	var hobbie = req.body;
	Hobbie.addHobbie(hobbie, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(hobbie);
	});
});

// Update Info
app.put('/api/hobbies/:_id', (req, res) => {
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
app.delete('/api/hobbies/:_id', (req, res) => {
	var id = req.params._id;
	Hobbie.removeHobbie(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});


app.listen(3000);
console.log('Running on port 3000...');
