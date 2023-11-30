import { User } from "../models/user.js"; //here is error user not getting
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

/**
 * User -- is different not from model
 * serializeUser()
 * this fn is used when user authenticated -- we store some info in session/cookies
 *
 * deserializeUser()
 */

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

/**
 *client id 871783877623-ah8p61cgvdb0sa5v2s8jt71qgr9fkoc6.apps.googleusercontent.com
 *client secret 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
 */

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "871783877623-ah8p61cgvdb0sa5v2s8jt71qgr9fkoc6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    // made mistake -- was not using done ( it signal the conoleteion of authentication in pasport js)
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record!
          new User({ name: profile.displayName, googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
