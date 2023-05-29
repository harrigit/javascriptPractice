const express = require('express');
const morgan=require('morgan');
//express App
const app=express();


//Listen to Express request
app.listen(4000);

app.use((req,res, next )=>{
    console.log("New Request Made");
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    next();
})
//morgan Middlewarwe
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    //res.send('<p>Home Page</p>');
    res.sendFile('./View/index.html',{root:__dirname});

});
app.get('/about',(req,res)=>{
   // res.send('<p>This Api</p>');
   res.sendFile('./View/About.html',{root:__dirname});
});
//redirct in Express Server
app.get('/about-us',(req,res)=>{
    // res.send('<p>This Api</p>');
    res.redirect('/About');
 });
 //404 Page In Express Server
 app.use((req,res)=>{
res.sendFile('./View/404.html',{root:__dirname});
 })
 