import path from 'path'
//1.join two or more file->index.py test.java
//const fullPath=path.join('/path,'index.py','file.java')
//console.log("files join=",fullPath)


//2.absolute path
// const absolutePth=path.resolve();
// console.log("we are currently working on ",absoluePth)


//3.extension name
const extname=path.extname('resume.pdf')
console.log("extname=",extname)
if(extname=='.pdf'){
    console.log("ok")
}
else{
    console.log("not supported")
}    


