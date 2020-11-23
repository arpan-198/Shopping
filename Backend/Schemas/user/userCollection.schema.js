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

const user_login=new schema(sch,{
    timestamps:true
});

module.exports=user_login;
