const http = require("http")
http.createServer((req,res)=>{
    console.log(req.url)
    res.write("hi")
    
}).listen(8999)