import mongoose from "mongoose"

export const mongodbConn = async () => {
    const uri = process.env.MONGODB_URI
    await mongoose.connect(uri).then(()=>console.log("server is connected to the Database"))
}