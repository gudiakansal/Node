import express from 'express'
const app= express();
// C= create => POST(method)
// R=read=> GET (method)
// U= Update => PUT (method)
// D= Delete => DELETE(method)
app.get('/suman',(req,res)=>{
    res.send("This is response")
})
app.post('instagram_post',(req,res)=>{
    res.send("This is response")
})
app.put('/suman',(req,res)=>{
    res.send("This is response")
})
app.delete('/suman',(req,res)=>{
    res.send("This is response")
})
const port = 2000;
app.listen(port,()=>console.log('Server is running on port${port'))