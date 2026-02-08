import http from 'http'
const server = http.createServer((req , res)=>{
    res.end("you request for something")
});
const port= 1000;
server.listen(port,()=>console.log(`server is running on port ${port}`))