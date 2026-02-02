import {readFile, writeFile,appendFile,mkdir} from 'fs/promises';
//1.read file
const read_file=async(fileName)=>{
    const data = await readFile(fileName,'utf-8')
    console.log(data);
};
//read_file('sample.txt')


//2.create file
const create_file=async(fileName, content)=>{
    await writeFile(fileName,content)
    console.log("file create successfully")
}
//create_file('ai.py', 'this is testing file')


//3.add content to file
const append_file=async(fileName, content)=>{
await appendFile(fileName,content);
console.log("extra content added successfully")
}
//append_file('ai.py',"this is extra content")


//4.create folder or directory
const create_dir=async(dir)=>{
await mkdir(dir)
}
//create_dir('components')


//5.like src/components/java
const create_dirr=async(dirr)=>{
await mkdir(dirr,{recursive:true})
}
create_dirr('src/components/java')
