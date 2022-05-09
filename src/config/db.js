import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const connString = "mongodb://localhost:27017/expenses_tracker";
    const conn = mongoose.connect(connString);

    conn && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
