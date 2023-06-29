import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 8000;

// connect mongodb
import { MongoConfig } from "./Components/MongoDb/MongoConfig.js";
MongoConfig();

// middlewear
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

import userRouter from "./Components/userRouter.js";

app.use("/demo/express", userRouter);

app.use("/", (req, res) => {
  res.json({
    status: " success ",
    message: " this is get",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(
        `server is connected and running at http://localhost:${PORT}`
      );
});
