const product_details=require('../db/database').product_details;



exports.sellerAddProductController=async(req,res)=>{
    // console.log(req.params);

    // console.log(`${req.body.mrp}`);
    
    // console.log(typeof({valueOf: () =>`${req.body.mrp}`}));
    


    const new_product=new product_details({
        product:{
            name:`${req.body.name}`,
            MRP:parseInt(`${req.body.mrp}`),
            quantity:parseInt(`${req.body.quantity}`),
            ptype:`${req.body.ptype}`,
            weight:parseInt(`${req.body.weight}`)
        },
        source:{
            manufacture:`${req.body.mName}`,
            manufacture_address:`${req.body.mAddress}`,
            manufacture_date:`${req.body.mDate}`
        },
        subtypeName:`${req.params.type}`
    });

    new_product.save((err,result)=>{
        if(err){
            console.log(err);
            res.status(401).json({
                message:"Invalid"
            });
        }
        else{
            console.log(result);
            res.status(200).json({
                message:"Successfull"
            });
        }
    });
}

