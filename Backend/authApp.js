const express=require('express');
const body=require('body-parser');
const app=express();
const cors=require('cors');


// const signup=require('./router/signup');
// const login=require('./router/login');
// const homeProductList=require('./router/product')
// const seller=require('./router/seller');
const adminAuthRouter=require('./router/authAdmin')

app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.use(cors());


// app.use('/signup',signup);
// app.use('/',login);
// app.use('/home',homeProductList);
// app.use('/seller',seller);
app.use('/admin',adminAuthRouter);

module.exports=app;


