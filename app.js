import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cors from "cors";

config({
  path: "./config/config.env",
});

import otherRouter from "./routes/otherRoutes.js";

const app = express();

//Using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(
  cors({
    origin: [process.env.DEV_FRONTEND_URL, process.env.PROD_FRONTEND_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

export default app;

app.get("/", (req, res) => {
  res.send(
    `<h1>Site is working. Click <a href=${process.env.DEV_FRONTEND_URL}>here</a> to visit the DEV_frontend.</h1> 
    <br/> 
    <h1>Site is working. Click <a href=${process.env.PROD_FRONTEND_URL}>here</a> to visit the PROD_frontend.
    `
  );
});

app.use("/api/v1", otherRouter);

app.use(ErrorMiddleware);
