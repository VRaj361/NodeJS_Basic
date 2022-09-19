const express = require("express")
const app = express()
const port=1212

app.get("/",(req,res)=>{
    console.log("home")
    res.end()
})

app.get("/login",(req,res)=>{
    res.write("login\n")
    res.write("user")
    res.end()
})

app.get("/signup",(req,res)=>{
    res.write("home")
    res.send("signup")
})

app.listen(port,()=>{
    console.log("server is running on port number -> "+port)
})
