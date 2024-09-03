// one of the core concepts of the node is the concept of event in fact a lot of node core funcationality is based on this concept of Events

// an event is basically a singnal that indicates that something has happened in our application 

// for example: in resturant a man raised request to bring a coffee for him, for that request a waiter is intrested to listen OR responed to that request and fulfill their need that he raised for.

// here is the man is emitter, and waiter is listener 
// emit means: making a noise or produce something.

// here man signalling that an event has happened   

// lets try it

const EventEmitter = require("events"); // here EventEmitter is a class
// first create a instance of that class
const emitter = new EventEmitter();

// in this emitter object has bunch of methods, here we have more than 10 methods but most of the time we use only two of these methods one is (emit) and second is (on).

// emit => raised the event
// on => listen to that event


// now register a listener
// emitter.addListener() // you can use this also but we have alias for this, that we use more often that is on.
emitter.on("coffee", function () {
    console.log("here is your coffee sir");

});



// raised an event named coffee
// here we need the listener to responed that event if we run this code noting happend because there is no listner.
// lets registe the listener to responed. but order is important here if you register listener after emit nothing happend.
emitter.emit("coffee");

// now quite often when we want to raise an event we also want to send some data about that event we can additional argument as event argument.

// we can use ES6 feature arrow function
emitter.on("coffee_please", (arg) => {
    console.log("here you are", arg);

});

emitter.emit("coffee_please", { orderId: 1, type: "cold coffee" });