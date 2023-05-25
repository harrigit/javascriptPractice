const arrayOfPeoples=['HAris Niazi','Uzair Don','Usman Don','Saad Niazi'];
const ages=['24','24','26','24'];

module.exports="Hello I will be Print In your Module File"
//Now This Will Also print IN your Module File
module.exports=arrayOfPeoples;
//now This Is Accessing Both array In Module File
module.exports={
    arrayOfPeoples,ages
};//