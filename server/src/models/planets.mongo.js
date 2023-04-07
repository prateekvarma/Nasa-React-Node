const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

//Connects planetSchema to the planets collection
//mongoose will auto de-capitalize Planet and pluralize it
module.exports = mongoose.model('Planet', planetSchema)