import "dotenv/config"
import express from "express";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origins : ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

await connectDB;

app.use("/course");


app.listen(PORT, () => {
    console.log("server listening at port : ", PORT);
});