const http=require("http")
const fs=require("fs")
// http.createServer((req,res)=>{
//     // console.log(req.url)
    
//     // res.end()
//     fs.readFile("./index1.html",function(err,data){
//         if(err){
//             console.log(err);
//             res.end("<h1>This is error</h1>")
//         }
//         return res.end(data)
//     })
// }).listen(8888)


const app = http.createServer((req,res)=>{
    console.log("fdsa")
    res.end()
})
const port=1212
app.listen(port,(err)=>{
    console.log("server is running on port -> "+port)
})