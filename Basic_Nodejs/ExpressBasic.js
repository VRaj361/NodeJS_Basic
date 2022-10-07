const express = require("express")
const mongoos = require("mongoose")
const app = express()
let port = 9998

//get request
app.use(express.json())//json request like raw->json
app.use(express.urlencoded({extended:true}))//body for taking images, sticker and all this think in urlEncoded
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

app.post("/calculate",(req,res)=>{
    console.log(req.body)//getting data
    let ans = req.body.num1+req.body.num2
    res.json({status:200,msg:"Addition",data:ans})
})


mongoos.connect('mongodb://localhost:27179/basicprac',function(){
    console.log("Database Connected...")
})

app.listen(port,()=>{
    console.log("server started on port number -> "+port)
})