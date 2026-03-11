import cookieParser from "cookie-parser"
import express from 'express'
import dotenv from 'dotenv'

export const configApp = (app)=>{
    dotenv.config()
    app.use(express.json())
    app.use(cookieParser())
    app.listen(process.env.PORT,()=>console.log("server is running on"+process.env.PORT))
}
