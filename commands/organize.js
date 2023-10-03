// const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
  let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'zx'],
    documents: ['docs', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb'],
    images: ['png', 'jpg', 'jepg']
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
    if (fs.existsSync(organizedFiles) == false) { //organizeFile name ka folder exist nhi krta ha to bana do 
        // console.log(organizedFiles);
        fs.mkdirSync(organizedFiles);
    } else console.log("file already exist");

    let allfiles = fs.readdirSync(srcPath);
    // console.log(allfiles);
    
    for (let i = 0; i < allfiles.length; i++){
        // let ext = allfiles[i].split(".")[1];
        
        
        // let ext = path.extname(allfiles[i]);
        // console.log(ext);


        let fullPathOfFile = path.join(srcPath, allfiles[i]);
        // console.log(fullPathOfFile);
        let isfile = fs.lstatSync(fullPathOfFile).isFile();
        console.log(allfiles[i] + " is " + isfile);
        if (isfile) {
            let ext = path.extname(allfiles[i]).split(".")[1];
            // console.log(ext);

            let folderName = getFolderName(ext);
            console.log(folderName);


            // copyFileToDes(srcPath, fullPathOfFile, folderName);
        }

    }
}

function getFolderName(ext) {
    for (let key in types) {
        // console.log(key);
        for (let i = 0; i < types[key].length; i++){
            if (types[key][i] == ext) {
                return key;
            }
        }
    }
}
// function copyFileToDes(srcPath, fullPathOfFile, folderName) {
//     // folder ka path banana ha 
    
//         let desFolderPath = path.join(srcPath, "organized_file", folderName);
//     if (!fs.existsSync(desFolderPath)) {
//         fs.mkdirSync(desFolderPath);
//     }
// }
let srcPath = "D:/FileOrganizer/downloads";
// let srcPath = "";
console.log(srcPath);
organize(srcPath);