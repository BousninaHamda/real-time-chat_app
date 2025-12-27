import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected To MongoDB successfully");
  } catch (error) {
    console.error("Error occured while connecting to MongoDB", error);
    process.exit(1);
  }
};
