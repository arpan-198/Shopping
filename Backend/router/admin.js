const express=require('express');
const router=express.Router();

const adminControlers=require('../api/controller/adminControllers/adminAuth.controller')


// router.post('/addproduct/:type',authenticate.authCheck,addproductcontroler.adminAddProductController);
router.post('/signin',adminControlers.adminPostSigninUser);
router.post('/forget',adminControlers.adminPostForgetUser);
router.get('/otp/resend',adminControlers.adminGetResendOTP);
router.post('/otp/verify',adminControlers.adminPostVerifyOTP);
router.delete('/otp/del',adminControlers.adminGetDeleteOTP);
router.put('/chng/password/:id',adminControlers.adminPutChangePassword);
// router.post('/signup',adminSignup.adminPostSignupUser);

module.exports=router;