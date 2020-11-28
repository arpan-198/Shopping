const express=require('express');
const router=express.Router();

const authAdminControlers=require('../api/controller/adminControllers/authAdmin.controller')


// router.post('/addproduct/:type',authenticate.authCheck,addproductcontroler.adminAddProductController);
router.post('/signin',authAdminControlers.adminPostSigninUser);
router.post('/forget',authAdminControlers.adminPostForgetUser);
router.get('/otp/resend',authAdminControlers.adminGetResendOTP);
router.post('/otp/verify',authAdminControlers.adminPostVerifyOTP);
router.delete('/otp/del',authAdminControlers.adminGetDeleteOTP);
router.put('/chng/password/:id',authAdminControlers.adminPutChangePassword);
// router.post('/signup',adminSignup.adminPostSignupUser);

module.exports=router;