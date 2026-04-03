const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
        }
}

const closeDBConnection = async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
}

module.exports = { connectDB, closeDBConnection };