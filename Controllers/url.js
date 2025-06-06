import { UrlData } from "../Models/Url.js"
import shortid from 'shortid';

export const shortenUrl=async (req,res)=>{
    const longUrl=req.body.longUrl;
    const shortCode=shortid.generate();


    const shortUrl=`http://localhost:3000/${shortCode}`;
    const newUrl=new UrlData({longUrl,shortCode})
    await newUrl.save();

    console.log(newUrl);
    res.render('index.ejs',{shortUrl:shortUrl});

}

export const redirect=async (req,res)=>{
    const shortCode=req.params.shortCode;
    console.log(shortCode);
    const originalUrl=await UrlData.findOne({shortCode})
    console.log(originalUrl.longUrl);
    res.redirect(originalUrl.longUrl);
}