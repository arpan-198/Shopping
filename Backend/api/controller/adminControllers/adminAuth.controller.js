const md5=require('MD5');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
require('dotenv').config();


const admin_auths=require('../../db/database').admin_auths;

// console.log(process.env.SECRET_KEY_FOR_APP);

var otp ;
var email_OTP;
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',


    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    }
    
});




exports.adminPostSigninUser=async(req,res)=>{
    let id=(req.body.id).trim();
    let email=(req.body.email).trim();
    let password=md5((req.body.password).trim());
    console.log(req.body);

    admin_auths.findOne({id:`${id}`,password:`${password}`},async (err,result)=>{
        if(err) throw err;
        if(!result)
        {
            res.status(400).json({
                message:"Invalid"
            })
        }
        else{
             let data={
            "email":email,
            "id":id
            };
            let Token=await jwt.sign(data,process.env.SECRET_KEY_FOR_APP,{ expiresIn:'1200s'});
            res.status(200).json({
                message:"Login Successful",
                id : data.id,
                email:data.email,
                token:Token
            })

        }
    });
    
}


exports.adminPostForgetUser=async(req,res)=>{
    let email=(req.body.email).trim();
    global.email_OTP=email;
    global.otp=Math.random();
    global.otp=global.otp * 1000000;
    global.otp=parseInt(global.otp);

    await admin_auths.findOne({email:`${email}`},async (err,result)=>{
        if(err) throw err;
        if(!result)
        {
            res.status(400).json({
                message:"Invalid"
            })
        }
        else{

            var mailOptions={
                to: req.body.email,
               subject: "Otp for registration is: ",
               html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + global.otp +"</h1>" 
             };
             
             transporter.sendMail(mailOptions, async(error, info) => {
                if (error) {
                    return console.log(error);
                }
                else{
                    res.status(200).json({
                        message : "Successfull"
                    })
                }
            });
                
          
                
            }
    });
}
    



exports.adminGetResendOTP=async(req,res)=>{

    global.otp=Math.random();
    global.otp=global.otp * 1000000;
    global.otp=parseInt(global.otp);

    var mailOptions={
        to: global.email_OTP,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + global.otp +"</h1>"
     };
     
     transporter.sendMail(mailOptions, async(error, info) => {
        if (error) {
            return console.log(error);
        }
        else{
            res.status(200).json({
                message : "Successfull"
            })
        }
    });
}


exports.adminPostVerifyOTP=async(req,res)=>{
    let localOTP=req.body.OTP;
    
    if(global.otp==localOTP){
        res.status(200).json({
            message : "Successfull"
        })
    }
    else{
        res.status(400).json({
            message : "Invalid OTP"
        })
    }
}

exports.adminGetDeleteOTP=async(req,res)=>{
    global.otp=null;
    res.status(200).json({
        message : "Successfull"
    })
}



exports.adminPutChangePassword=async(req,res)=>{
    let id=req.params.id;
    let password=md5((req.body.password).trim());

    admin_auths.findOne({id:`${id}`},async (err,result)=>{
        if(err) throw err;
        if(!result)
        {
            res.status(400).json({
                message:"Invalid Id"
            })
        }
        else{

            admin_auths.findOneAndUpdate({id:`${id}`},{password : `${password}`},(err,result1)=>{
                if(err){
                    res.status(400).json({
                        message:"Invalid"
                    })
                }
                else{
                    res.status(200).json({
                        message : "Password Successfully Updated"
                    })
                }

            })
        }
    });
    
}



