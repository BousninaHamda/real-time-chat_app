import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
const app = express();

dotenv.config();

const __dirname = path.resolve();

const port = process.env.PORT || 3000;
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    app.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
app.listen(port, () => console.log(`Server is running on port ${port}`));
