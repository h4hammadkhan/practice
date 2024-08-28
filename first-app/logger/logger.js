// lets create a module 
// logger let imagine we are going to create a module for logging the messages in this application or others application. 
// we gonna use one of those remote logging services for logging our messages so there are websites out there they provide logging as a service they give us URL ans we can send an Http request to that urlto log message in the cloud

//Ex:

// we gonna use simple example

function log(message) {
    console.log(message);

}

// make it public you need to export as a object
module.exports.log = log;
// now we can use this outside the file



// we can export/import like this also as a single function
// module.exports = log;
// app.js=> const log = require('logger');
// -------- log("message");