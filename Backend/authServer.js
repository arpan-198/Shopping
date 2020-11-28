const http=require('http');
const app=require('./authApp');


const port=7001;
const host="localhost";

const server=http.createServer(app);

server.listen(port,host,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("Authenticate " + port + " running");
})
