import express from "express";
/**
 * create app here & export
 */

const app = express();

/**
 * add middlewiere if any
 * imp -- cors & cookieParser
 */
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

export default app;
