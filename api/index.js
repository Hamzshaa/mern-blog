import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// middleware to handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
