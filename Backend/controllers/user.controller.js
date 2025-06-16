
import User  from "../model/user.model.js";
import bcrypt from "bcryptjs";
import path from 'path';
path.resolve('../model/user.model.js');



export const register = async (req,res)=>{
    try{
        
        const {name,email,password} = req.body;
        if(!email||!password||!name){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            });
        };


        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"user already exist",
                success:false
            });
        };

        let hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            name,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message: "user created successfully",
            success:true,
        });

    }catch(err){
        console.log("error:",err);
        }
    }


export const login = async(req,res)=>{
    try{

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        }


        let user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                message:"email doesnot exixt",
                success:false
            });
        }

        const isPassword = await bcrypt.compare(password,user.password);
        if(!isPassword){
            console.log("passoord milena");
            res.status(401).json({
                message:"invalid email or password",
                success:false
            });
        }
        

        user = {
            _id:user._id,
            name:user.name,
            email:user.email,
        }
        

        return res.json({
            success: true,
            user
        });
 
    }catch(err){
        console.log("error:",err);
    }
}

export const logout  = async (_,res) => {
    try{
        return res.cookie("token","",{maxAge:0}).json({
            message: "logged out successfully",
            success:true,
        });
        
    }catch(err){
        console.log("error:",err);
    }
}

