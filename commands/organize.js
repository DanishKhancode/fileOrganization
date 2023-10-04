const { execSync } = require("child_process");
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
    
      // traverse krenge sari file pr or un ke extension pr un ko classify krenge 
    for (let i = 0; i < allfiles.length; i++){
       
        let fullPathOfFile = path.join(srcPath, allfiles[i]);
        console.log(fullPathOfFile);
      // 1. check if it is a folder or file 
        // lstatsync give the information regarding the link provided.. ye batata ha jo hmne deya ha file ya folder
        let isfile = fs.lstatSync(fullPathOfFile).isFile();  //agr file ha to true return krega agr folder to  false retrun  
        console.log(allfiles[i] + " is " + isfile);
        if (isfile) {
            // get ext name...  khali zip  lane ke leye split use hota ha  
            let ext = path.extname(allfiles[i]).split(".")[1];
            // console.log(ext);

            let folderName = getFolderName(ext);
            console.log(folderName);
            // copy from sorce folder (srcPath) and paste in dest folder(folder_name e.g document , media)
                         // copy    kya copy kro    paste
            copyFileToDes(srcPath, fullPathOfFile, folderName);
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
    return "miscellaneous"
}
function copyFileToDes(srcPath, fullPathOfFile, folderName) {
  
    // folder ka path banana ha
    let desFolderPath = path.join(srcPath, "organized_files", folderName);
    //check folder if exist , if does not exit ,then make folder
    if (!fs.existsSync(desFolderPath)) {
        fs.mkdirSync(desFolderPath);
    }

    // copy file from src folder to dest folder
    //  basename -> return a last portion of a path

    let fileName = path.basename(fullPathOfFile); //abc.zip
    let desfileName = path.join(desFolderPath, fileName);
               // copy hua source se // or paste hua dest me 
    fs.copyFileSync(fullPathOfFile, desfileName);
}
// let srcPath = "D:/FileOrganizer/downloads";
// organize(srcPath);

 module.exports = {
    organize : organize,
}

