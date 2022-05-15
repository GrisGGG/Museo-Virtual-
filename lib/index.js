const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')

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