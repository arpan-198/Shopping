const md5=require('MD5');
const jwt=require('jsonwebtoken');
require('dotenv').config();


const user_logins=require('../db/database').user_logins;


const key=process.env.SECRET_KEY_FOR_APP;

// console.log(dotenv.SECRET_KEY_FOR_APP);
const removeSlash=(str)=>{
    str=str.replace(/\\"/g,'"');
    str=str.replace(/\\\'/g,'\'');
    str=str.replace(/\\0/g,'\0');
    str=str.replace(/\\\\/g,'\\');
    return str;
}

const addSlash=(str)=>{
    str=str.replace(/\"/g,'\\"');
    str=str.replace(/\'/g,'\\\'');
    str=str.replace(/\0/g,'\\0');
    str=str.replace(/\\/g,'\\\\');
    return str;
}

exports.postLoginUser=async(req,res)=>{
    let user=addSlash((req.body.username).trim());
    let password=md5((req.body.password).trim());
    // console.log(process.env.SECRET_KEY_FOR_APP);
    // console.log(user);
    user_logins.findOne({user_id:`${user}`,password:`${password}`},(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if(!result)
        {
            res.status(400).json({
                message:"Invalid"
            })
        }
        else{
            // let Token="This is token";
             let data={
            "email":result.email,
            "user_id":user
            };
            let Token=jwt.sign(data,key);
            res.status(200).json({
                message:"Login Successful",
                token:Token
            })

        }
    });
    
}