import express from 'express';
import path from 'path'
const app=express();

//send response
const products = [
    {title:'iphone',price:75000},
    {title:'oneplus',price:65000},
    {title:'vivo',price:55000},
]
app.get('/',(req,res)=>{
    //  res.json({
    //     message:"fetched all products",
    //     message:"fetched all products",
    //      message:"fetched all products",
    // });
    //res.send('<h1>This is response</h1>')
const dir=path.resolve();
//console.log("my path= ",dir)
const url = path.join(dir,'./index.html')
console.log("full path=",url)
res.sendFile(url)
});
const port=2000;
app.listen(port,()=>console.log(`server is  running on port ${port}`))
