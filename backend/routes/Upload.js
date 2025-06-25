const express = require("express");
const multer = require("multer");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");

const uploadRouter = express.Router();
const upload = multer({ dest: "uploads/" }); // temp storage

uploadRouter.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "your_folder_name_here", // Optional
    });
    fs.unlinkSync(req.file.path); // Clean up temp file
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = uploadRouter;
