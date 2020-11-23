const mongoose=require('mongoose');
const md5=require('MD5')
const Schema=mongoose.Schema;
const sch={
    product:{
        name:{
            type:String,
            required:[true,"Field is required"]
        },
        MRP:{
            type:Number,
            required:[true,"Field is required"]
        },
        quantity:{
            type:Number,
            required:[true,"Field is required"]
        },
        ptype:{
            type:String,
            required:[true,"Field is required"]
        },
        weight:{
            type:Number
        }

    },
    source:{
        manufacture:{
            type:String,
            required:[true,"Field is required"]
        },
        manufacture_address:{
            type:String
        },
        manufacture_date:{
            type:Date
        }
    },
    subtypeName:{
        type:String,
        required:[true,"Field is required"]
    }

}

module.exports=new Schema(sch,{timestamps:true});