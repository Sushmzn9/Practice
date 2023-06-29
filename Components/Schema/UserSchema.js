import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  password: String,
});

export default mongoose.model("Bio", UserSchema);
