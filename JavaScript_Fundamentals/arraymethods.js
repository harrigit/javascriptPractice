
//Array methods in JS

let methods = [1, 3, 4, 56, 7];
console.log(methods.toString());
let z = methods.join("_");
console.log(typeof z, z);

console.log(methods.pop("Last Number is removed From Array With PopUp Method"));
console.log(methods);
console.log(methods.push(99, 44, 55));
console.log(methods);
console.log(methods.shift("First Number is removed From Array With Shift Method"));
console.log(methods);
console.log(methods.unshift("First Number is Added in Array With unShift Method"));
console.log(methods);


//Delete Operator In JS 
let Checking = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Checking2 = [99, 77, 11, 12, 13, 14, 15, 16]
delete Checking[3]
console.log(Checking, Checking.length);
//ConCat in JS
let Concat = Checking.concat(Checking2);
console.log(Concat)
Checking2.sort();//sort Array Ka Andar Jo Bi Cheez hoti ha USa String Consider krta ha 
console.log(Checking2);



//print Array in Acending And Decending Order 
//Acending
function Compare(a, b) {
  return a - b;
}
let acd = [99, 77, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
acd.sort(Compare);
console.log(acd)

//Decending
function Compare2(x, y) {
  return y - x;
}
let dec = [99, 77, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
dec.sort(Compare2);
console.log(dec)

//reverse in JS 

let reverse1 = [99, 77, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
reverse1.reverse();
console.log(reverse1)

//Splice And Slice vvvvimp Concepts
//Splice

let Splicee = [3, 4, 6, 7, 8, 9, 0, 2, 4, 56, 6, 6, 7, 7, 7, 7, 7, 76555, 5, 5, 5];
Splicee.splice(6, 11, 45, 55555);
//6 sa murad 6 sa khtam hona strat hoga //11 sa murad 11 elements khtam hoon ga //45 aur 55555 ya dona Array ma add ho ga jahan sa khtam huva hain
console.log(Splicee);

//Slice
//Slice Array already Array ka New Array Array ka bacha bna da ga 
let slice1 = [99, 77, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let child = slice1.slice(3, 6);
//index 3 sa 6 tak new array bna da ga 
console.log(slice1)
console.log(child)


///Map() Method  In js
let map1=[30,40,50,60]
let a=map1.map((value,index,array)=>{
  console.log(value,index,array)
  return value;
})
console.log(a);

//Filter Method In js

let filter1=[30,40,50,60]
let b=filter1.filter((value)=>{
  console.log(value)
return value>30;
})
console.log(b);


//Array Reduce method in Js

let reduce = [30,50,60,80]
let c=reduce.reduce((value1,value2)=>{
  return value1 + value2;
  
})
console.log(reduce);
console.log(c);

