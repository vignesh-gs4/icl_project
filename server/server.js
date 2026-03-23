import "dotenv/config"
import express from "express";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoute from "./routes/userRoute.js";
import courseRoute from "./routes/courseRoute.js";
import adminRoute from "./routes/adminRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origins : ["http://localhost:5173", "http://localhost:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

await connectDB();

app.use("/users/", userRoute);
app.use("/course", courseRoute);
app.use("/admin", adminRoute);

app.use((req, res, next) => {
    const error = new Error("Route not found" + req.url);
    error.statuscode = 404;
    next(error);
});


app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log("server listening at port : ", PORT);
});