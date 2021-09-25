const fs = require("fs");
const path = require("path");

let p = __dirname;

const getFile = async (path)=>{
    let fileList = [];
    await fs.readdirSync(path);
}

getFile(p).then(res=>{
    console.log(res)
});

module.exports = {
    __dirname,
    getFile,
}