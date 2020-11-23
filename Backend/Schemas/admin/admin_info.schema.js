const mongoose=require('mongoose');
const schema=mongoose.Schema;

const sch={
    id:{
        type:schema.Types.ObjectId,
        ref:"admin_logins",
        unique : true
    },
    name:{
        type:String,
        required:[true,"must be fill"]
    },
    dob:{
        type:Date,
        required:[true,"must be fill"]
    },
    des :{
        type : String,
        required : [true,"must be fill"]
    },
    address:{
        
        parmanent:{
            pAddr : {
                type:String,
                required:[true,"must be fill"]
            },
            pStreet_name:{
                type:String
            },
            pDistrict:{
                type:String,
                required:[true,"must be fill"]
            },
            pPin:{
                type:Number,
                required:[true,"must be fill"]
            },
            pState:{
                type:String,
                required:[true,"must be fill"]
            }
        },
        current:{
            cAddr : {
                type:String,
                required:[true,"must be fill"]
            },
            cStreet_name:{
                type:String
            },
            cDistrict:{
                type:String,
                required:[true,"must be fill"]
            },
            cPin:{
                type:Number,
                required:[true,"must be fill"]
            },
            cState:{
                type:String,
                required:[true,"must be fill"]
            }
        }
        
        
       
    }
}

const admin_info=new schema(sch,{
    timestamps:true
});

module.exports=admin_info;

