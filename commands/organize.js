const { execSync } = require("child_process");
let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'zx'],
    documents: ['docs', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb'],
    images:['png','jpg','jepg']
}
function organized(srcPath) {
    if (srcPath == undefined) {
        // console.log(srcPath);
        srcPath = process.cwd();
        // console.log(srcPath);
    }
    // else console.log(srcPath);
    let organizeFiles = path.join(srcPath, "organize_files");
    if (fs.existsSync(organizeFiles) == false) { //organizeFile name ka folder exist nhi krta ha to bana do 
        // console.log(organizeFiles);
        fs.mkdirSync(organizeFiles);
    } else console.log("file already exist");
}
organized();