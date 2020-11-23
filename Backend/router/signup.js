const express=require('express');
const router=express.Router();

const routingFunction=require('../api/controller/signup.controller');



router.post('/',routingFunction.postSignupUser);


module.exports=router;