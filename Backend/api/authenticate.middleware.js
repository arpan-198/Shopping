const jwt=require('jsonwebtoken');
require('dotenv').config();



exports.authCheck=async (req,res,next)=>{

    const rawToken=req.headers['authorization'];
    const Token=rawToken && rawToken.split(" ")[1];
    if(!Token){
        res.status(500).json({
            message:"Not Authorize"
        })
    }

    await jwt.verify(Token,process.env.SECRET_KEY_FOR_ACCESS_TOKEN,(error,decode)=>{
        if(error){
            res.status(401).json({
                message:"Invalid Token"
            })
        }
        else{
            console.log(decode);
            req.admin=decode._id;
            next();
        }
        
    })
}