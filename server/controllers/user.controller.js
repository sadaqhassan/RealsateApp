//registerApi

import { USER } from "../Model/user.model.js"

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


    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
    }
}


