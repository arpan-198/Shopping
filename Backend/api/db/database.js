const mongoose=require('mongoose');


const login_info=require('../../Schemas/user/userCollection.schema');
const typeOfProductCollection=require('../../Schemas/typeOfProductCollection.schema');
const productdetail=require('../../Schemas/product_details.schema');
const admin_auth = require('../../Schemas/admin/admin_auth.schema');
const admin_info = require('../../Schemas/admin/admin_info.schema');
// const admin_info=require('../../Schemas/seller/seller_login.schema');

const aAuthData=require('../../Data/admin-auth.json');
const aInfoData=require('../../Data/admin-info.json');
const md5 = require('MD5');




mongoose.connect('mongodb://localhost/Shopping', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex : true})
.then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

    const user_logins=mongoose.model('user_logins',login_info);
    // module.exports=user_login;

    const product_details=mongoose.model('product_details',productdetail);
    // module.exports=product_detail;
    const admin_auths=mongoose.model('admin_auths',admin_auth);

    const admin_infos=mongoose.model('admin_infos',admin_info);
    

    (()=>{
        console.log(aAuthData);
        admin_auths.find({id : aAuthData.id},{},(err,result)=>{
            if(err){
                console.log(err);
            }
            else if(result==0){
                // console.log(result);
                let initData = new admin_auths({"id" : aAuthData.id,"email" : aAuthData.email,"password" : md5(aAuthData.password)});
                initData.save((err,result1)=>{
                    if(err){
                        console.log(err);
                    }
                    // console.log(result1);
                    if(result1){
                        let data={"id" : result1._id,...aInfoData}
                        let initInfo = new admin_infos(data);
                        initInfo.save((err,result2)=>{
                        if(err){
                            console.log(err);
                        }
                    })
                    }
                })
            }
        })
    })();


    
    // const seller_logins=mongoose.model('seller_logins',seller_login);
    // module.exports=admin_info;

    module.exports={
        user_logins,
        product_details,
        admin_auths,
        admin_infos
        // seller_logins
    }