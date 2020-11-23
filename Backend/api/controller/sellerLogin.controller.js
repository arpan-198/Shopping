const md5=require('MD5');
const jwt=require('jsonwebtoken');
require('dotenv').config();


const seller_logins=require('../db/database').seller_logins;


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

exports.sellerPostLoginUser=async(req,res)=>{
    let user=addSlash((req.body.user).trim());
    let password=md5((req.body.password).trim());

    seller_logins.findOne({user_id:`${user}`,password:`${password}`},(err,result)=>{
        if(err) throw err;
        if(!result)
        {
            res.status(400).json({
                message:"Invalid"
            })
        }
        else{
             let data={
            "email":result.email,
            "user_id":user
            };
            let Token=jwt.sign(data,process.env.SECRET_KEY_FOR_APP,{ expiresIn:'1200s'});
            res.status(200).json({
                message:"Login Successful",
                token:Token
            })

        }
    });
    
}