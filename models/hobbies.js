/*
 Hi There Arturo , you will see that this core is only the back
 in specific for make the request and handle the data coming from mongo
left to add in this model is
* the middleware for validate the cookie
i thought will better do it once the front is done or in Progress.
also for testing i like it to use Grunt and Mocha also i will add once
i have more progress into the front

MongoDB
DBS -> hobbies !Made it for test Porpouse
Collections -> hobbies !Made it for test Porpouse

For Testing the Rest I used REST Client in google :
Content-Type: application/json.
*http://localhost:3000/api/hobbies/ ->   Method Get  -> Get Info
* http://localhost:3000/api/hobbies/ -> Method Post -> Create Record
    {
    "hobbie":"Test Hobby",
    "hobbie_type": "Test Hobbie Type"
    }
*http://localhost:3000/api/hobbies/id_from_database -> Method Put -> Update Record
    {
    "hobbie":"Test Hobby Update",
    "hobbie_type": "Test Hobbie Type Update"
    }
*http://localhost:3000/api/hobbies/id_from_database -> Method Delete -> Delete a Record


Any Comment , Suggest or Concern
Let me Know by Skype or making a commit

Ivan

*/
const mongoose = require('mongoose');

// Schema
const hobbieSchema = mongoose.Schema({
    hobbie:{
      type: String,
      required: true
    },
    hobbie_type: {
      type: String,
      required: true
    },
    create_date:{
      type: Date,
      default: Date.now
    }

  });

    const Hobbie = module.exports = mongoose.model('Hobbie',hobbieSchema);

    // get Hobbies
    module.exports.getHobbies = (callback, limit) => {
      Hobbie.find(callback).limit(limit);
    }

    // Add Hobbie
    module.exports.addHobbie = (hobbie, callback) => {
    	Hobbie.create(hobbie, callback);
    }

    // Update Hobbie
    module.exports.updateHobbie = (id, hobbie, options, callback) => {
    	var query = {_id: id};
    	var update = {
        hobbie: hobbie.hobbie,
    		hobbie_type: hobbie.hobbie_type
    	}
    	Hobbie.findOneAndUpdate(query, update, options, callback);
    }

    // Delete Hobbie
    module.exports.removeHobbie = (id, callback) => {
    	var query = {_id: id};
    	Hobbie.remove(query, callback);
    }
