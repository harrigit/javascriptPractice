let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("First Promise");
        resolve(10);
    }, (10*1000));
    
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Second Promise");
        resolve(20);
    },(3*1000))
    
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Third Promise");
        resolve(30);
    },(4*1000));
    
})
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result);

}).catch((err)=>{
    console.error(err);
});