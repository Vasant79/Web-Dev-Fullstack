import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

/**
 * imp middleweire
 * 1. cores -- handelling cross origin
 * 2. cookieParser --  hanndleing cookies of client
 * app.use() -- when using middleweire
 */

//installed dev -- middlewire
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// not installed -- methods in express -- doc
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

export default app;
