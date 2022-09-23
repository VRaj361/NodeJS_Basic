const express = require("express")
const sessionController = require("./controller/session_controller")

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/signup",sessionController.signup)

let port = 8989
app.listen(port,()=>{
    console.log('Server is running on port number -> '+port);
})
