const jwt=require('jsonwebtoken');
require('dotenv').config();


exports.authCheck=(req,res,next)=>{
    const rawToken=req.headers.authorization;
    const Token=rawToken.split(" ");


    if(!Token[1]){
        res.status(500).json({
            message:"Not Authorize"
        })
    }

    jwt.verify(Token[1],"This iS SECRET_KEY_FOR mE",(error,decode)=>{
        if(error){
            res.status(500).json({
                message:"Invalid Token"
            })
        }
        else{
            next();
        }
        
    })
}
