const getConnection = require('./getConnection');
const Request = require('tedious').Request;

const execQuery = (query, parameters, callbackEvent) =>{
    const command = new Promise(resolve, reject) =>{
        getConnection().connect()
    };
}