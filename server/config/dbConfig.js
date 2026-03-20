import mongoose from "mongoose";

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    try {
        await mongoose.connect(`uri/${icldb}`);
        console.log("database connected");
    } catch(err) {
        console.log("error connecting with database : ", err.message);
    }

}

export default connectDB;