//ASYNC AND AWAIT
async function Test() {
    return "Hello I am testing";
    
}
Test().then((Result)=>{
    console.log(Result );
}).catch((err)=>{
    console.log(err);
})



///Short Method Async Function

let Test1=async ()=> {
    return "helloooo";
}
Test1().then((result)=>{
    console.log(result);

}).catch((err)=>{
    console.log(err);
})