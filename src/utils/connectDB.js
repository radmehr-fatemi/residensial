import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if ( mongoose.connections[0].readyState ) return
        mongoose.connect(process.env.MONOGO_URI);
        mongoose.set('strictQuery', true);
        console.log("Connected to DB");

    } catch (err) {
        console.log("Error in connection" ,err)
    }
} 

export default connectDB