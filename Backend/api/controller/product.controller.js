const typeofproducts=require('../../Schemas/typeOfProductCollection.schema');


exports.productTypeList=async (req,res)=>{
    
    await typeofproducts.find({},(error,result)=>{
        if(error){
            console.log(error);
            res.status(400).json({
                message:"Something Wrong"
            })
        }
        if(!result){
            res.status(400).json({
                message:"List is empty"
            })
        }
        res.status(200).json(result);

    })
}