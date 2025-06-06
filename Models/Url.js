import mongoose from "mongoose";

const UrlSchema=new mongoose.Schema({
    longUrl:{
        type:String,
        required:[true,"Long URL is reuired"]
    },
    shortCode:String
})

export const UrlData=mongoose.model("shortUrl",UrlSchema);