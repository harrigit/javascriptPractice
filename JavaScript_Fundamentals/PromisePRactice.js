const rom= new Promise((resolve, reject) => {
    setTimeout(()=>{
        const myProfile={
            Name :"Muhammad Haris Khan",
            Age : 25,
            City : "Bhakkar",
            
        }
        resolve(myProfile);
    },4000);
    

   
});
rom.then((myProfile)=>{

    console.log(myProfile);
});
rom.catch((err)=>{
    console.log(err);
});

//Write a function named getUserData that returns a promise. The promise should resolve after a delay of 2 
//seconds with an object containing some user data such as name, age, and email. If an error occurs, 
//the promise should be rejected with an error message.


function UserData() {
    return new Promise((resolve , reject)=>{
    
    setTimeout(()=>{
      const GetUserData={
            Name:'Hassan Aziz Tariq',
            Age: 23,
            Email:"hassan.aziz@icommunix.com"
    }
    resolve(GetUserData);

    },2000); 
    
});
}
UserData()
.then((GetUserData)=>{
    console.log(GetUserData);
})
.catch((err)=>{
    console.log(err);
})