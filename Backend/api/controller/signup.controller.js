const md5=require('MD5');
const user_logins=require('../db/database').user_logins;


const addSlash=(str)=>{
    str=str.replace(/\"/g,'\\"');
    str=str.replace(/\'/g,'\\\'');
    str=str.replace(/\0/g,'\\0');
    str=str.replace(/\\/g,'\\\\');
    return str;
}


// console.log("ball");

exports.postSignupUser=async(req,res)=>{
    console.log(req.body);
        let em=addSlash((req.body.email).trim());
        let us=addSlash((req.body.username).trim());
        let pass=md5((req.body.password).trim());
        console.log(em);
        
        let user=new user_logins({email:`${em}`,user_id:`${us}`,password:`${pass}`});
        user.save((err,result)=>{
            if(err){
                console.log(err);
                res.status(401).json({
                    message:"Invalid"
                });
            }
            else{
                console.log(result);
                res.status(200).json({
                    message:"Successfull"
                });
            }
        });
    
}