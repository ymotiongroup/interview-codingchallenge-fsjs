/**************************************************

Hi There Arturo
as you can see the back is not complete , this core is more regarding with
make the request to the Database and Handle the Data.
I used for testing this REST REST Easy for Google Chrome.

Mongodb
DBS : hobbies !made it for test porpuse
Collection : hobbies !made it for test porpuse

Rest API:
Content-Type : application/json
* http://localhost:3000/api/hobbies -> Method GET -> Getting the Info
* http://localhost:3000/api/hobbies -> Method Post -> Create a Record
      {
      "hobbie":"Test Hobby Update",
      "hobbie_type": "Test Hobbie Type Update"
      }
* http://localhost:3000/api/_id_from_database -> Method Put -> Update a Record
      {
      "hobbie":"Test Hobby Update",
      "hobbie_type": "Test Hobbie Type Update"
      }
* http://localhost:3000/api/_id_from_database -> Method Delete -> Delete a Record

Left to Do :

* All the front end
* Add the Middleware and the Cookie , i thought would be better add once have the front
in progress.
* For Testing porpuse i like it to use Grunt and Mocha , also thought would better
used it once the front is in progress

Any Comment, Suggest or Concern

Let me know by Skype or with a commit

Thanks
Sincerily
Ivan

*****************************************************/
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
