import cookieParser from "cookie-parser"
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

export const configApp = (app)=>{
    dotenv.config()
    app.use(cors())
    app.use(express.json())
    app.use(cookieParser())
    app.listen(process.env.PORT,()=>console.log("server is running on"+process.env.PORT))
}
