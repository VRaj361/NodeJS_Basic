const express = require("express")
const app = express()
let port = 9998

//get request
app.get("/login",(req,res)=>{
    res.send("Login..")
    //out of all the content is ignored
})
app.get("/signup",(req,res)=>{
    res.write("Signup..\n")
    res.write("Hello");
    res.end()
})
//send is nothing but combination of write and end both
app.get("/",(req,res)=>{
    res.send("Home.. Page")
})
app.listen(port,()=>{
    console.log("server started on port number -> "+port)
})