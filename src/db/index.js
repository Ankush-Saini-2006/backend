import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try{
        const connectioninstant =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host:${connectioninstant.connection.host}`)//is se host ka pta chlta hai konse host par chl raha hai
    }
    catch(error){
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}
export default connectDB