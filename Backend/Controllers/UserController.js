import usermodel from "../Models/Usermodels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator";



// Loginuser
 const loginUser = async (req,res) => {

    const {name , password} = req.body;
     try {
        const user = await usermodel.findOne({name});
        if (!user) {
            return res.json({success:false,message:"User doesnt exists"})
            
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false, message: "Invalid Credentials"})
            
        }

         const token = createtoken(user._id)
         res.json({success: true ,token})

        
     } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
        
     }


    
 }

 const createtoken = (id) => {
    return  jwt.sign({id},process.env.JWT_SECRET)
 }


 // removeUser 
  
 const registerUser = async (req,res) => {
    const {name , email ,password} = req.body;
    try {
        // Checking the user is already existing or not
        const  exist = await usermodel.findOne({email})
        if(exist){
            return res.json({success: false , message : "User already exist"})
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false , message : "Please enter a valid email"})
            
        }
        if (password.length<8) {
            return res.json({success:false , message: "Enter a strong password"})
            
        }
         // Hashing user password

         const salt = await bcrypt.genSalt(10);
         const hasedpassword =  await bcrypt.hash(password,salt);

         const newuser = new usermodel({
            name: name,
            email:email,
            password: hasedpassword
         })

        const user =  await newuser.save();
        const token = createtoken(user._id)

        res.json({success:true , token})




    } catch (error) {
        console.log(error);
        res.json({success:false , message:"Error"})
        
        
    }
    
 }


 export {loginUser , registerUser}
