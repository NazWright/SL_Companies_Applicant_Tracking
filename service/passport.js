const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const bcrypt = require("bcrypt");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      const { id, name, emails } = profile;
      console.log("email", name);
      User.findOne({
        googleId: id,
        familyName: name.familyName,
        givenName: name.givenName,
        email: emails[0].value,
      }).then((existingUser) => {
        if (existingUser) {
          console.log("found user!");
          // we already have a record with the given profile ID

          done(null, existingUser);
        } else {
          console.log("found  no user!");
          // we don't have a user record with this ID, make a new record!
          new User({
            googleId: id,
            familyName: name.familyName,
            givenName: name.givenName,
            email: emails[0].value,
            role: "",
            isAdmin: false,
            parent: null,
          })
            .save()
            .then((user) => {
              done(null, user);
            });
        }
      });
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },

    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        bcrypt.compare(password, user.password, (err, same) => {
          if (err) {
            return done(err);
          }
          if (!same) {
            return done(null, false);
          }
        });
        return done(null, user);
      });
    }
  )
);
