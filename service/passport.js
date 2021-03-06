const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const bcrypt = require("bcrypt");
const UserService = require("./UserService/UserServiceImpl");
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
    async (req, accessToken, refreshToken, profile, done) => {
      const { id, name, emails } = profile;
      console.log("email", name);
      const matchedUser = await UserService.authenticateUser(User, {
        googleId: id,
        familyName: name.familyName,
        givenName: name.givenName,
        email: emails[0].value,
      });
      if (matchedUser) {
        done(null, matchedUser);
      } else {
        const newUser = await new User({
          googleId: id,
          familyName: name.familyName,
          givenName: name.givenName,
          email: emails[0].value,
          role: "",
          isAdmin: false,
          parent: null,
        }).save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async function (email, password, done) {
      const matchedUser = await UserService.authenticateUser(User, { email });
      if (Object.keys(matchedUser).length < 0) {
        return done(null, false, { message: "User information not found." });
      }
      if (!matchedUser.password) {
      }
      const same = matchedUser.password
        ? await bcrypt.compare(password, matchedUser.password)
        : false;
      // error
      // cant find user
      // passwords match
      // passwords dont match
    }
  )
);
