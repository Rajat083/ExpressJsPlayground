const { connect } = require("mongoose");
const app = require("./app");
const { connectDB, closeDBConnection } = require("./database/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

const gracefulShutdown = async () => {
    console.log("Received SIGTERM, shutting down gracefully...");
    await closeDBConnection();
    process.exit(0);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

startServer();