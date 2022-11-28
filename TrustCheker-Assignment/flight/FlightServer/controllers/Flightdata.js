const FlightInfo = require('../model/FlightData');

const createFlight = async (req, res)=>{
    const newFlight = new FlightInfo(req.body)

    try {
        const saveData = await newFlight.save()
        res.status(201).json({saveData})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

const getFlight = async( req, res) =>{
    try {
        const data = await FlightInfo.findById(req.params.id)
        res.status(201).json({ data })
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

const getFlights = async (req, res) => {
    try {
        const data = await FlightInfo.find()
        res.status(201).json({ data })
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

module.exports = {
    getFlight,
    getFlights, 
    createFlight
}