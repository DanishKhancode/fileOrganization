// const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'zx'],
    documents: ['docs', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb'],
    images:['png','jpg','jepg']
}
function organize(srcPath) {
    if (srcPath == undefined) {
        // console.log(srcPath);
        srcPath = process.cwd();
        // console.log(srcPath);
    }
    // else console.log(srcPath);
    let organizedFiles = path.join(srcPath, "organized_files");
    // let organizeFiles = srcPath + "/" + "organize_files";
    console.log("organized file folder path is", organizedFiles);
    if (fs.existsSync(organizeFiles) == false) { //organizeFile name ka folder exist nhi krta ha to bana do 
        // console.log(organizeFiles);
        fs.mkdirSync(organizedFiles);
    } else console.log("file already exist");

    let allfiles = fs.readdirSync(srcPath);
    console.log(allfiles);
    
    for (let i = 0; i < allfiles.length; i++){
        // let ext = allfiles[i].split(".")[1];
        let ext = path.extname(allfiles[i]);
        console.log(ext);
    }
}
let srcPath = "D:\FileOrganizer\commands\downloads";
console.log(srcPath);
// organize(srcPath);