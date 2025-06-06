import express from 'express'
import mongoose from 'mongoose'
import { shortenUrl,redirect } from './Controllers/url.js'

const app = express();

app.use(express.urlencoded({extended:true}));

const connectionString=""; //*Enter your connection string here.

mongoose.connect(`${connectionString}`, {
    dbName: "URL_Shortener"
}).then(() => { console.log("MongoDB Connected.") }).catch((error) => { console.log(error) });

app.get('/', (req, res) => {
    res.render('index.ejs', { shortUrl: null });
})

app.post('/shorten', shortenUrl);

app.get('/:shortenedUrl',redirect);
const port = 3000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });
