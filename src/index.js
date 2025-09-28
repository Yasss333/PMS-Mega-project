import app from './app.js';
import dotenv from "dotenv";
import DBconnect from './db/dbconnect.js';


dotenv.config({
    path:"../.env"
})
const PORT=process.env.PORT||8000;

DBconnect()
 .then(()=>{
    app.listen(PORT,()=>{
        console.log(`Backend Running on PORT: ${PORT}`);
        
    })
 })
 .catch((err)=>{
    console.log("MongoDB connection Failed ",err);
    
 })