const dotenv=require("dotenv")

dotenv.config({path:'./.env'})
const mongoose=require('mongoose')
const DB=process.env.DATABASE;

console.log(DB)
mongoose.connect(DB).then(()=>{
    console.log('Connection successful')
}).catch((err)=>{
    console.log('no connection')
})