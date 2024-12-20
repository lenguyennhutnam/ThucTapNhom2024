import mongoose from "mongoose";

export const connectDatabase = async () => {
  console.log("Connecting to database...");
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Kết nối database thành công!");
  } catch (error) {
    // console.log(error);
    console.log("Kết nối database thất bại!");
  }
}