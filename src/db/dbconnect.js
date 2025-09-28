import moongoose from "moongoose";

const DBconnect= async ()=>{
    try {
        await moongoose.connect(process.env.MONGO_URI)
        console.log("Mongo conected ");
        
    } catch (error) {
        console.error("Mongodb connection Failed ",error );
        process.exit(1);
        
    }
}

export default DBconnect;