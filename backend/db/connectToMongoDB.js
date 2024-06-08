import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://richardmiruka:vK$m$k7xGqGAC_p@cluster0.ixbnhvj.mongodb.net/sms?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;