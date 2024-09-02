const fs = require("fs");

fs.readdir("./", function (err, res) {
    if (err) console.log(`Error: ${err}`);
    else console.log(`Result: ${res}`);
})
// Result: files.js,os.js,path.js


fs.readdir("$", function (err, res) {
    if (err) console.log(`Error: ${err}`);
    else console.log(`Result: ${res}`);
})
// Error: Error: ENOENT: no such file or directory, scandir 'D:\hammad\node js\practice\first-app\modules\$'