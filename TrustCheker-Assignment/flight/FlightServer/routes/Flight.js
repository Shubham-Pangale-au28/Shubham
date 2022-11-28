
const express = require('express');

const router = express.Router();

const { createFlight, getFlights, getFlight } = require('../controllers/Flightdata');

router.get('/', getFlights);
router.post('/', createFlight);
router.get('/:id', getFlight);

module.exports = router