const express=require('express');
const router=express.Router();


const addproductcontroler=require('../api/controller/sellerAddProduct.controller')
const sellerLogin=require('../api/controller/sellerLogin.controller');
const sellerSignup=require('../api/controller/sellerSignup.controller');
const authenticate=require('../api/authenticate.middleware');

router.post('/addproduct/:type',authenticate.authCheck,addproductcontroler.sellerAddProductController);
router.post('/login',sellerLogin.sellerPostLoginUser);
router.post('/signup',sellerSignup.sellerPostSignupUser);

module.exports=router;