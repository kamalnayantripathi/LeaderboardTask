import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config"


const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
const port = process.env.PORT || 8000;


// Import routes
import userRouter from "./routes/users.routes.js";

// routes declaration
app.use("/api",userRouter)

// Connect Mongoose database
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("DB connection error", error);
  }
};

startServer();


app.get('/',(req, res)=>{
    res.send("Hello world")
})
