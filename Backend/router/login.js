const express=require('express');
const router=express.Router();

const routingFunction=require('../api/controller/login.controller');
// const auth=require('../api/authenticate.middleware')



router.post('/',routingFunction.postLoginUser);


module.exports=router;