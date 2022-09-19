const http = require("http")
const fs = require("fs");
http.createServer((req,res)=>{
    // console.log(req.url)
    
    // res.write("hi")
    fs.readFile("../localserver/index")
}).listen(8999)


