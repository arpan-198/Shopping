const http=require('http');
const app=require('./app');


const port=7000;
const host="localhost";

const server=http.createServer(app);

server.listen(port,host,(err)=>{
    if(err)
    console.log(err);
    else
    console.log(port+" running");
})
