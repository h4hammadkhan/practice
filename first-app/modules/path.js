// When ever you put require function first it look in built in modules then check relative path
const path = require("path");
var pathobj = path.parse(__filename);
console.log(pathobj);
console.log(__filename);


