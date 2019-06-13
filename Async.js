var fs = require('fs')
var filePath = process.argv[2];
fs.readFile(filePath,(err,data)=>{
if (err){
    return console.log(err)
} else {
    let output = data.toString().split('\n');
    console.log(output.length-1);

} });
    


