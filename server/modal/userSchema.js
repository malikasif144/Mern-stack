const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const bcrypt = require("bcrypt")

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


// userSchema.pre('save', async function(next){

//     if(this.isModified("password")){
//         this.password = bcrypt.hash(this.password,12)
//         this.cpassword = bcrypt.hash(this.cpassword,12)

//     }
//     next();

// });

//generate auto token
userSchema.methods.generateAuthToken = async function (){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECKRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    }catch (err){
console.log(err);
    }
}

const User=mongoose.model('USER',userSchema)
module.exports=User;