const http=require('http');
const _=require('lodash');
const server=http.createServer((req,res)=>{
res.setHeader('content-type', 'text/plain');
const num=_.random(0,50);
console.log(num);
//lodash Implementation
const greet=_.once(()=>{
    console.log("AOA YA HABIBI");
})
greet();
greet();

})
server.listen(8000,'localhost',()=>
{
console.log("listening On This Port");
})