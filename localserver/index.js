const http=require('http')//http 
const port=8998//initialize port
const fs=require('fs')
function requestHandler(req,res){
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html'})
    // res.end("Node js server without html")
    // res.end("<h1>Node js server</h1>")
    fs.readFile("./index.html",function(err,data){
        if(err){    
            console.log(err)
            return res.end("<h1>error</h1>")
        }
        return res.end(data)
    })

}


const server=http.createServer(requestHandler)//create server 
server.listen(port,function(err){//listen method can work on create server
    if(err){
        console.log(error)
        return;
    }
    console.log("Server running upto date on port number ",port )
    
})//access localhost:8998 or 127.0.0.1:8998 on browser
