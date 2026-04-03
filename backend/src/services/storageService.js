const  { ImageKit }  = require("@imagekit/nodejs");
require("dotenv").config();

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

const uploadFile = async (buffer) => {
    try {
        const result = await imagekit.files.upload({
            file: buffer.toString("base64"),
            fileName: "image.jpg",
        });
        return result;
    }
    catch (error) {
        console.error("Error uploading file:", error);
    }
}

module.exports = uploadFile;