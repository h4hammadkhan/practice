// why we use express ?
// in simple express gives our application skeleton OR Structure to maintain readability and usabletity scalability.

// this return function
const Joi = require("joi")
const express = require("express");
// this return object called express;
const app = express();

app.use(express.json())

const cources = [
    {
        id: "1", name: "cource1"
    },
    {
        id: "2", name: "cource2"
    },
    {
        id: "3", name: "cource3"
    },
    {
        id: "4", name: "cource4"
    },
]

// now this app object has a bunch of useful methods like. app.get/put/post/delete and so on..

// get api
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/api/cources", (req, res) => {
    res.send(cources);
});

// get cource by id
app.get("/api/cources/:id", (req, res) => {
    const cource = cources.find(c => c.id === req.params.id)
    if (!cource) res.sendStatus(404).send("Not Found")
    else res.send(cource);
});

app.post("/api/cources/create-post", (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const { error, value } = schema.validate(req.body);
    console.log(error);
    console.log(value);

    if (error) {
        res.send({
            status: false,
            message: error.details[0].message.replaceAll("\"", "")
        });
        return;
    }

    const cource = {
        id: cources.length + 1,
        name: req.body.name,
    }
    cources.push(cource);
    res.send(cource);
});

app.put("/api/cources/update-post", (req, res) => {
    const schema = Joi.object({
        id: Joi.required(),
        name: Joi.string().min(3).required()
    });

    const { error, value } = schema.validate(req.body);
    console.log(error);
    console.log(value);


    if (error) {
        res.send({
            status: false,
            message: error.details[0].message.replaceAll("\"", "")
        });
        return;
    }

    const cource = cources.find(c => c.id === req.body.id)
    if (!cource) { res.sendStatus(404).send("not Found"); return; }

    cource.name = req.body.name;

    res.send(cource);



});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);

});

// now set the eviroment variable
// Command: set PORT=5000


// lets install nodemon "Node-Monitor"
// command: npm i -g nodemon
// -g: install this globally so we run it anywere
// after instalation use nodemon insted of node
