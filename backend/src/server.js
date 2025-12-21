import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
const app = express();

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
