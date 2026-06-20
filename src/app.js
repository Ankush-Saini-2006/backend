import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app=express()
app.use(cors({
    orgin:process.env.CORS_ORIGN,
    credentials:true
}))
app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParse())

export {app}