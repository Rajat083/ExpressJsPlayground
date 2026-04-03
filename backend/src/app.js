const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storageService")
const postModel = require("./models/post.model");

const app = express();

app.use(express.json());

// Configure Multer for file uploads
const upload = multer({
    storage: multer.memoryStorage()
});

app.post("/upload", upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    });

    return res.status(201).json({ post });

})

module.exports = app;