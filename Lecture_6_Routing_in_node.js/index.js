import http from 'http'
const server = http.createServer((req,res)=>{
// console.log(req)
// res.end('<h1>your request has been accepting</h1>')
if(req.url==='/wdm'){
    res.end("welcome ")
}else if(req.url==='/srk'){
    res.end("we are unable to show anything ")
}
else{
    res.end("invalid")
}
})
const port = 1000;
server.listen(port,()=>console.log(`server is running on port ${port}`))