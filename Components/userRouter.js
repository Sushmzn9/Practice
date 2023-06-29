import express from "express";
import { insertUser } from "./Schema/UserModel.js";
const router = express();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "server running healthy",
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: "server not connected",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const User = await insertUser(req.body);

    User?._id
      ? res.json({
          status: "success",
          message: "user has been added ",
        })
      : res.json({
          status: "error",
          message: "Unable to add user",
        });
  } catch (error) {
    let msg = error.message;
    if (msg.includes("E11000 duplicate key error")) {
      msg = "There is another user who uses this name in the system";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});

export default router;
