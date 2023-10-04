const path = require("path");
let helpRequire = require("./commands/help");
let orgfun = require("./commands/organize");
let treeFunc = require("./commands/tree");
// console.log(helpRequire.help());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
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
