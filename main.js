let helpRequire = require("./commands/help");
// console.log(helpRequire.help());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree":
        break;
    case "organize":
        break;
    case "help":
        helpRequire.help();
        break;
    default:
        console.log("command not recognize");
        break;
        
}
