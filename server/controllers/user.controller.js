import { USER } from "../Model/user.model.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

//registerApi

export const RegiserApi = async(req,res)=>{
    const {email,password,username} = req.body

    if(!email || !password || !username){
        return res.status(400).json({success:false,message:"plese fill all fields"})
    }
    try {
        const isExist = await USER.findOne({email});
        if(isExist){
            return res.status(400).json({success:false,message:"this user is exist"})
        }

        const hashedPassword = bcrypt.hashSync(password,10);

        const newUser = new USER({
            username,
            email,
            password:hashedPassword
        })

        await newUser.save();

        return res.status(201).json({success:true,message:"registeration successfully"})

    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
    }
}



export const LoginApi = async(req,res)=>{
    const {email,password} = req.body

    if(!email || !password ){
        return res.status(400).json({success:false,message:"plese fill all fields"})
    }
    try {
        const isExist = await USER.findOne({email});
        if(!isExist){
            return res.status(400).json({success:false,message:"incorrect email or password"})
        }

        const isCompare = bcrypt.compareSync(password,isExist.password);

        if(isCompare){
            return res.status(400).json({success:false,message:"incorrect email or password"})
        }

        const token = jwt.sign({id:isExist._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        res.cookie("token",token,{
            httpOnly: true,
        });
        
        return res.status(200).json({success:true,message:"login successfully"})

    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
    }
}
