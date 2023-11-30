import passport from "passport";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to feedback management");
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", passport.authenticate("google"));

router.get("/current_user", (req, res) => {
  res.json(req.user);
});

router.get("/logout", (req, res) => {
  req.logout;
  res.send(req.user);
});

export default router;
