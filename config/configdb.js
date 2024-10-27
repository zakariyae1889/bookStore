import mongoose from 'mongoose'
export const Connectdb=async ()=>{
    try{
       const connet = await mongoose.connect(process.env.MONGO_URL);
       console.log(`Mongodb Connected ${connet.connection.host}:${process.env.PORT}`);


    }catch(error)
    {
       console.error(`Error ${error.process}`);
       process.exit(1);
    }
}