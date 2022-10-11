const dotenv=require("dotenv")
const mongoose=require('mongoose')
const express = require("express")
const app = express();
const auth = require('./router/auth');
dotenv.config({path:'./.env'})
require('./db/conn');
// const User=require('./modal/userSchema')
app.use(express.json());
//we link router file to make our route easy

// const DB='mongodb+srv://merndb:database@cluster0.yqux3yc.mongodb.net/mernstack?retryWrites=true&w=majority';
const PORT=process.env.PORT;


// const middleware=(req,res,next) =>{
//     console.log(`hello middleware`)
//     next();
// }

// middleware();


app.get('/',(req,res) =>{
    res.send(`hello world`);
})
// app.get('/about',(req,res) =>{
//     res.send(`hello about`);
// })
app.get('/contact',(req,res) =>{
    res.send(`hello contact`);
})
app.get('/signin',(req,res) =>{
    res.send(`hello signin`);
})
app.get('/signup',(req,res) =>{
    res.send(`hello signup `);
})
console.log("hi  ddfew")
app.use(auth);
app.listen(PORT,()=>{
    console.log(`server is running`)
})