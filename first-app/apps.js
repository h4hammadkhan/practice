function sayHello(name) {
    console.log("Hello ", name);

}

sayHello("hammad")

var message = "hh";

// all the methods came from window object
// Window.console.log("from window");

// we dont need to prefix this window object, the javaScript engine will prefix this statement itself.

// window.sayHello("hi");

// window.message is also part of the window object

// we dont need to user window object insted of we can use global object
// Ex: global.console.log("global") 
// but one thing you need to know about node is that these variable "message" we define here they are not added to the global object. 
// if we access the variable using global.messgae, we are goinng to see undefined
// Ex: console.log("global") // undefined

// as you can see the variables and functions that we define here they are not added to the global object, (variables, function) they are only scoped to this file app.js so they are not available outside of this file

console.log(global.message);
