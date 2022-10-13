const UserModel = require("../Model/user.model.js")
const validator = require("validator")
exports.getAllUsers = (req,res)=>{
    UserModel.find(function(err,success){
        if(err){
            console.log(err)
            res.json({
                status:-1,
                msg:"Not found",
                data:"Please Try Again"
            })
        }else{
            res.json({
                status:200,
                msg:"Found",
                data:success
            })
        }
        
        
    })
}

exports.addUser = (req,res)=>{
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let error={}
    let isError = false

    //validation 
    if(name==undefined||validator.isEmpty(name)){
        isError = true
        error.nameError = "Please Enter Name"
    }
    if(email == undefined ||validator.isEmpty(email)){
        isError = true
        error.emailError = "Please Enter Email"
    }
    if(password == undefined || validator.isEmpty(password)){
        isError = true
        error.passwordError = "Please Enter Password"
    }
    if (isError) {
        res.json({
            status: -1,
            data: req.body,
            err: error,
            msg: "Please Correct Errors"
        })
    } else {
       

        let user = new UserModel({
            "name":name,
            "email":email,
            "password":password
        })
        user.save(function (err, success) {
            if (err) {

                res.json({
                    msg: "Error",
                    status: 400,
                    data: req.body
                })
            } else {

                res.json({
                    msg: "Signup done...",
                    status: 200,
                    data: success
                })
            }
        })
    }

}

exports.getUserById = (req,res)=>{
    let userId = req.params.userId
    UserModel.findById(userId,(err,success)=>{
        if(err){
            console.log(err)
            res.json({
                status:-1,
                msg:"Not found",
                data:"Please Try Again"
            })
        }else{
            res.json({
                status:200,
                msg:"Found",
                data:success
            })
        }
        
    })
}
exports.updateUser = (req,res)=>{
    let userId = req.params.userId
    let email = req.body.email
    update = ({"_id":userId},{$set:{email:email}})
    UserModel.update(update,(err,success)=>{//updateOne
        if(err){
            console.log(err)
            res.json({
                status:-1,
                msg:"Not found",
                data:"Please Try Again"
            })
        }else{
            res.json({
                status:200,
                msg:"update",
                data:success
            })
        }
        
    })
}
exports.deleteUser = (req,res)=>{
    let userId = req.params.userId
    UserModel.remove({"_id":userId},(err,success)=>{
        if(err){
            console.log(err)
            res.json({
                status:-1,
                msg:"Not found",
                data:"Please Try Again"
            })
        }else{
            res.json({
                status:200,
                msg:"Deleted",
                data:success
            })
        }
    })
}   

