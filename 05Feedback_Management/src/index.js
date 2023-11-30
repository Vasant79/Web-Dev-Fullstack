import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import "./service/googleAuth.js";
import connection from "./db/dbConnection.js";
import router from "./routes/googleAuthRoute.js";

const app = express();
const PORT = process.env.PORT || 3001;

connection().then(() => {
  app.listen(PORT);
  console.log("connection done");
});

// see cookie in browser
app.use(
  cookieSession({
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    /* secret keys */
    keys: ["testing"],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(router);
