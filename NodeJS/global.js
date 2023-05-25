//console.log(global);

setTimeout(()=>{
    console.log("Set timeout checking....");
    clearInterval(int);
},5000);

const int =setInterval(()=>{
    console.log("i am Now a interval and I will run continously stop me Please ");
},1000);
setTimeout(()=>{
    console.log(__dirname);
    console.log(__filename);
},5000);
