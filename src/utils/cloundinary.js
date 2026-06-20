import {v2 as cloundinary} from "cloundinary"
import fs from "fs"
cloundinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
const uploadOnCloudinary= async(localFilePath)=>{
    try{
        if(!localFilePath) return null
        //upload the file on Cloudinary
        const respose=await cloundinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded on Cloundinary",response.url)
        return response
    }
    //file has been uploaded sucessfully
    
    catch(error){
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload opreation is failed
        return null;
    } 
    export {uploadOnCloudinary}
}