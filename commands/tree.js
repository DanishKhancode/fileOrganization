// const { dirname } = require("path");
const fs = require("fs");
const path = require("path");
function treeFn(dirPath) {
    if (dirPath == undefined) {
        console.log("Please enter a valid path");
        return;
    }
    let doesExist = fs.existsSync(dirPath);
    if (doesExist == true) {
        treeHelper(dirPath, " ");
    }
}
function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(targetPath);
        console.log(indent + "|--" + fileName);
        return;
    }
    let dirname = path.basename(targetPath);
    console.log(indent + "|__" + dirname);
    let childern = fs.readdirSync(targetPath);
    for (let i = 0; i < childern.length; i++){
        let childPath = path.join(targetPath, childern[i]);
        treeHelper(childPath, indent + "\t");
    }
}
// module.exports = {
//     tree: treeFn,
// }

let srcPath = "D:/FileOrganizer/downloads";
treeFn(srcPath);