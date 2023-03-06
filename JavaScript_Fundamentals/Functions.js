function Say(Message) {
    console.log(Message)
}
Say("Hello Ustad!")



 function Add(num1 , num2) {
    let x=num1+ num2;
    console.log(x);
    
}
Add(20,30)



function Compare(A , B) {
    if (A>B){
        return -1;
    }
    else{
        return 1;
    }
    
}
Compare(6,78)



let array=[
    {Car:'Mehran' ,  Price:'300000'} ,
    {Car:'Ipone', Price:'200000'},
    {Car: 'PS4',Price:'50000'}
]
console.log(array.length)
console.table(array)
