import { USER } from "../Model/user.model.js"

export const trying = async(email)=>{
    let count = 0

    const userData = await USER.findOne({email})

    count+1

    let timer ;

    if(timer > 2 * 60 * 1000){
        return res.status(500).json({success:false,message:"please try again 30 minutes letter"})
    }

    await userData.save()
    
    if(await userData.count >=5) {
        timer = 1 * 60 * 1000
        await userData.save() 
        return res.status(500).json({success:false,message:"please try again 30 minutes letter"})
    }
}