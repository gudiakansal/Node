import express from 'express'
const app=express();
let products = [
    {title:'iphone16',price:75000},
    {title:'iphone18',price:85000},
    {title:'iphone17',price:95000},
]
app.get('/',(req,res)=>{
    let name='ram'
    res.render('index.ejs',{name,products})
})
const port=1000;
app.listen(port,()=>console.log(`server is running on port${port}`))
