import TryCatch from "../utils/tryCatch.js";
import {User} from "../models/userModel.js"

export const myProfile=TryCatch(async(req,res)=>{
    const user=await User.findById(req.user._id).select("-password")
    
    res.json(user);
}) 

export const userProfile=TryCatch(async(req,res)=>{
    const user=await User.findById(req.params.id).select("-password")

    if(!user)res.status(404).json({
        message:"No User with this Id"
    })

    res.json(user);
})