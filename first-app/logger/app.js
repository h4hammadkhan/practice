// we to require in node to make object of looger.js

// here we want to use const insted of var because we dont want accidently overwite value of logger

// Ex#1
// var logger = require('./logger');
// logger = 1; // 
// logger.log("throw exception"); // logger.log is not a function
//

// Ex#2
// const logger = require('./logger');
// logger = 1; // Exception occur at compileTime; Assignment to constant variable
// logger.log("message");


const logger = require('./logger');

logger.log("message");
logger.log("message two");
