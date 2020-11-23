const mongoose=require('mongoose');
const schema=mongoose.Schema;

const sch={
    email:{
        type:String,
        required:[true,"must be fill"],
        unique:[true,"must be unique"]
    },
    user_id:{
        type:String,
        required:[true,"must be fill"],
        unique:[true,"must be unique"],
        lowerclass:true
    },
    password:{
        type:String,
        required:[true,"must be fill"]
    }
}

const seller_login=new schema(sch,{
    timestamps:true
});

module.exports=seller_login;
