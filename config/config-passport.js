const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
require("../api/models/user");
const User = mongoose.model("user");
const secret = process.env.secret;
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "name"
    },
    function(name, password, done) {
      User.findOne({ name })
        .then(user => {
          if (!user) {
            return done(null, false);
          }
          if (!user.validatePassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        })
        .catch(err => {
          done(err);
        });
    }
  )
);

passport.use(
  new Strategy(params, function(payload, done) {
    User.findById(payload.id)
      .then(user => {
        if (!user) {
          return done(new Error("User not found"));
        }
        return done(null, { id: user.id });
      })
      .catch(err => done(err));
  })
);
