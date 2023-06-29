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
  console.log(req.body);
  const User = await insertUser(req.body);
});

export default router;
