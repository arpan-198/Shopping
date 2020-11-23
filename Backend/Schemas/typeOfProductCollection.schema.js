const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const md5=require('MD5');
const sch={
    typeName:{
        type:String,
        unique:[true,"Type already exist"],
        required:[true,"Field is required"]
    },
    subType:{
        type:[
            {
                Name:String,
                typeid:String
            }
        ]
    }

}

const typeOfProductCollection=new Schema(sch,{timestamps:true});
const typeofproducts=mongoose.model('typeOfProducts',typeOfProductCollection);



// let type=["Books","Beauty","Men Fashion","women Fashion"];


// let books=["Fiction","Drama","Drawing"];
// let beauty=["Luxary beauty","Men grooming","Device for health"];
// let mFashion=["Clothes","Footwear","Watches"];
// let wFashion=["Clothes","Footwear","Watches"];


// console.log("first");

// let getdata=(X)=>{return X.map(data=>{
//     return {
//         'Name':data,
//         'typeid':md5(data+Math.floor(Math.random()*100))
//     }
// })}
// console.log("second");

// let finalData=(x,y)=>{
//     return {
//         'typeName':y,
//         subType:getdata(x)
//     }
// }


//     let dat1=new typeofproducts(finalData(books,"Books"));
//     dat1.save((err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

// let dat2=new typeofproducts(finalData(beauty,"Beauty"));
//     dat2.save((err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

// let dat3=new typeofproducts(finalData(mFashion,"Men Fashion"));
//     dat3.save((err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

// let dat4=new typeofproducts(finalData(wFashion,"women Fashion"));
//     dat4.save((err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })

module.exports=typeofproducts;