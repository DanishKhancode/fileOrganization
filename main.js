// node main.js help
// node main.js organize D:/FileOrganizer/downloads
// node main.js tree D:/FileOrganizer

let helpRequire = require("./commands/help");
let orgfun = require("./commands/organize");
let treeFunc = require("./commands/tree");
// console.log(helpRequire.help());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
    case "tree":
        treeFunc.tree(path);
        break;
    case "organize":
        orgfun.organize(path);
        break;
    case "help":
        helpRequire.help();
        break;
    default:
        console.log("command not recognize");
        break;   
}
