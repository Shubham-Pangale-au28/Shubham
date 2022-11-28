const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    name: String,
	origincity: String,
	destinationcity: String,
	departuredate: {
        type: Date,
        default: new Date()
    },
	returndate:{
        type: Date,
        default: new Date()
    },
    
	departuretime: {
        type: String
    },
	arrivaltime:{
       type: String
    },
	price: Number

})
const FlightInfo = mongoose.model('FlightData', FlightSchema);

module.exports = FlightInfo;