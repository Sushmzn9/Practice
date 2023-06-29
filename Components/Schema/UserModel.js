import UserSchema from "./UserSchema.js";

export const insertUser = async (userObj) => {
  await UserSchema(userObj).save();
};
