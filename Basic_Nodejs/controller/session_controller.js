const validator = require("validator")

exports.signup = (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let errors = {}
    let isError = false;

    if(name == undefined || validator.isEmpty(name) ){
        isError = true;
        errors.name = "Please Enter your name"
    }
    if(isError){
        res.json({
            status:404,
            data:req.body,
            errors:errors,
            msg:'Please Solve Above Errors First'   
        })
    }else{
        res.json({
            status:200,
            data:req.body,
            msg:'Signup Successfully'   
        })
    }
}
