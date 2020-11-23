const mongoose=require('mongoose');
const schema=mongoose.Schema;

var validateLength = function(minLength, maxLength) {
    minLength = minLength || 32;
    maxLength = maxLength || 40;
    return {
      validator : function(value) {
        if (value === undefined) return false;
        return value.length >= minLength && value.length <= maxLength;
      },
      message : 'Optional field is shorter than the minimum allowed length (' + minLength + ') or larger than the maximum allowed length (' + maxLength + ')'
    }
  }


const sch={
    email:{
        type:String,
        required:[true,"must be fill"],
        unique:[true,"must be unique"],
        lowercase: true,
        set: v => v.toLowerCase()
    },
    id:{
        type:String,
        required:[true,"must be fill"],
        unique:[true,"must be unique"],
        uppercase: true,
        set: v => v.toUpperCase()
    },
    password:{
        type:String,
        required:[true,"must be fill"],
        validate : validateLength(32,40)
    }
}

const admin_auth=new schema(sch,{
    timestamps:true
});

module.exports=admin_auth;


