// const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();


const productListCntroller=require('../api/controller/product.controller');


router.get('/productlist',productListCntroller.productTypeList);


module.exports=router;
