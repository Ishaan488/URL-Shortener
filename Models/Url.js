import mongoose from "mongoose";

const UrlSchema=new mongoose.Schema({
    longUrl:String,
    shortCode:String
})

export const UrlData=mongoose.model("shortUrl",UrlSchema);