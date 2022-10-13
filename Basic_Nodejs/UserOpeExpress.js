const express = require("express")
const mongoos = require("mongoose")
const sessionController = require("./controller/session_controller")
const userController = require("./controller/user_controller")
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/signup",sessionController.signup)
app.get("/users",userController.getAllUsers)
app.post("/user",userController.addUser)
app.get("/user/:userId",userController.getUserById)
app.put("/user/:userId",userController.updateUser)
app.delete("/user/:userId",userController.deleteUser)

let port = 8989
mongoos.connect('mongodb://localhost:2717/ecom',function(){
    console.log("Database Connected...")
})
app.listen(port,()=>{
    console.log('Server is running on port number -> '+port);
})
