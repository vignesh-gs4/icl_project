import "dotenv/config"
import express from "express";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import authRoute from "./routes/authRoute.js";
import courseRoute from "./routes/courseRoute.js";
import adminRoute from "./routes/adminRoute.js";
import commonRoute from "./routes/userAdminCommonRoute.js"

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://icl-project.vercel.app"
    ],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

connectDB().catch(err => {
    console.log("error connecting with Database : ", err.message);
});

app.use("/auth/", authRoute);
app.use("/courses", courseRoute);
// app.use("/admin/", adminRoute);

app.use("/common", commonRoute);

app.use("/", (req, res) => {
    console.log("------" + req.url + "------");
    res.send("API is working");
})

app.use((req, res, next) => {
    const error = new Error("Route not found" + req.url);
    error.statuScode = 404;
    next(error);
});


app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log("server listening at port : ", PORT);
});