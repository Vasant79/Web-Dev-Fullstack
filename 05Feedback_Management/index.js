import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app = express();

const PORT = process.env.PORT || 3001;
//let GoogleStrategy = require("passport-google-oauth20").Strategy;

//client id 871783877623-ah8p61cgvdb0sa5v2s8jt71qgr9fkoc6   .apps.googleusercontent.com
// client secret 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

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "871783877623-ah8p61cgvdb0sa5v2s8jt71qgr9fkoc6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.get("/", (req, res) => {
  res.send("Hello user");
});

app.listen(PORT);
