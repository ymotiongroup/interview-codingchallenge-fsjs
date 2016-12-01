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
