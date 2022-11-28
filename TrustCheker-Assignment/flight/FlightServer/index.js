const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const flightData = require('./routes/Flight')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors());


app.use('/flight', flightData)

const PORT = 8080
const MONGO_URL = 'mongodb://localhost:27017/FightData'
mongoose
        .connect(MONGO_URL)
        .then(()=> console.log("Database is connected Successfullly.."))
        .catch(() => console.log('Somthing went wrong....'))

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})