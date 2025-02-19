import express from 'express';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import cookieParser from 'cookie-parser';

import { connectDB } from './database/dbconnection.js';
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoutes.js"


const app = express();

app.use(express.json());
app.use(cookieParser());

dotenv.config();
cloudinary.v2.config({

    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
})

const PORT = process.env.PORT;

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.get("/", (req, res) => {
    res.send("This is a get request")
})
app.use(express.json());
app.listen(PORT, () => {
    console.log(`server is listening on  http://localhost:${PORT} `);
    connectDB();
}) 