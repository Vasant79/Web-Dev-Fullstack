import app from "./app.js";
import passport from "passport";
import connection from "./db/dbConnection.js";
import { user } from "./models/user.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

/**
 * always do in professional structure
 */

connection().then(() => {
  app.listen(3002);
  console.log("db listning on 3002");
});

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
      // console.log(accessToken);
      // console.log(refreshToken);

      console.log(profile.id);
      //storing id to db -- using .save() to save the data to db
      new user({ id: profile.id }).save();
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
