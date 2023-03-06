let complete=false;
let prom = new Promise((resolve,reject)=>{
    if (complete){
        resolve();
        console.log("Fullfilled Complete");
    }
    else{
        reject();
        console.log("Fullfilled Not Complete");

    }
    //prom.catch();
  
;})
console.log(prom);