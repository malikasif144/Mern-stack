const express = require("express");
const jwt=require("jsonwebtoken")
const router = express.Router();
require("../db/conn");
const User = require("../modal/userSchema");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { name, email, password, work, phone, cpassword } = req.body;
  if (!name || !email || !password || !work || !phone || !cpassword) {
    return res.json({ error: "plz fill all field" });
  }
  if (password != cpassword) {
    return res.status(400).json({ error: "Enter same password" });
  }
  const hashing = async (hasingText) => {
    const hashPassword = await bcrypt.hash(hasingText, 10);
    console.log(hashPassword);

    return hashPassword;
  };
  const haspassword =(await hashing(password)).toString();
  const hasCpassword = (await hashing(cpassword)).toString();

  const user = new User({
    name,
    email,
   password: haspassword,
    phone,
    work,
   cpassword: hasCpassword,
  });

  await user
    .save()
    .then(() => {
      res.status(201).json({ message: "user register successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });

  // User.findOne({email:email}).then((userExist)=>{
  //     if(userExist){
  //         return res.status(423).json({Error:"Email Already Exist"})
  //     }

  // })
  // .catch((err)=>{
  //     return res.status(423).json({Error:err})

  // Login Route
});
router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"awesome"})
  try {
    "" + process.env.SECKRET_KEY
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the form" });
    }
    const userLogin = await User.findOne({ email: email });

    console.log(userLogin);
    if(userLogin){
const isMatch = await bcrypt.compare(password,userLogin.password)
 token =await userLogin.generateAuthToken();
 res.cookie("jwtoken",token,{
  expires:new Date(Date.now() + 2589200000),
  httpOnly:true
 });
if (!isMatch) {
    res.status(400).json({ error: "User Error" });
  } else {
    res.json({ messae: "User Signin Succssfully" });
  }
} else {
    res.status(400).json({error:"Invalid Credientials"})
}
} catch(err){
    console.log(err)
} 
});

 

module.exports = router;
