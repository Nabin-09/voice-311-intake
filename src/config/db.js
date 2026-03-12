import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongo connected ✅`)
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}