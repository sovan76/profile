const http=require('http');

const bodyparser=require('body-parser');

const express=require('express');
const app=express();

//routes
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
// Middleware:
// app.use()

app.use(bodyparser.urlencoded({extended : false}));

app.use(adminroutes);
app.use(shoproutes); 

app.use((req,res,next)=>{
     res.status(404).send('<h1> page not found</h1>');
})

app.listen(3000);