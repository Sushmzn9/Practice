import mongoose from "mongoose";
export const MongoConfig = async () => {
  const conn = await mongoose.connect(`mongodb://localhost:27017/demo`);
  console.log("mgdb connected");
};
