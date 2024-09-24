// why we use express ?
// in simple express gives our application skeleton OR Structure to maintain readability and usabletity scalability.

// this return function
const express = require("express");
// this return object called express;
const app = express();

// now this app object has a bunch of useful methods like. app.get/put/post/delete and so on..

// get api
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/api/cources", (req, res) => {
    res.send([1, 2, 3, 4]);
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");

});


// lets install nodemon "Node-Monitor"
// command: npm i -g nodemon
// -g: install this globally so we run it anywere
// after instalation use nodemon insted of node
