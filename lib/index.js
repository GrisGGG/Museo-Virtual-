const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const animalsController=require('./controllers/animalesMarinos.controller');

dotenv.config();

const {
    API_PORT = 9000,
    SERVER_TAG = 'API ANIMALSEXTINSION'
} = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`Request client URL: ${req.get('host')}${req.originalUrl} >>>> ${SERVER_TAG}`);
    next();
});

app.use('/api/animalesMarinos',animalsController);

app.listen(API_PORT, ()=>{
    console.log(`API running on PORT ${API_PORT}`);
});