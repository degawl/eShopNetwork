const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');
const configAuth = require('./auth');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  //Local Signup
  passport.use('local-signup', new LocalStrategy({
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
  (req, username, password, done) => {

    // asynchronous
    process.nextTick(() => {

      User.findOne({ 'local.username' :  username }, (err, existingUser) => {

        if (err)
          return done(err);

        if (existingUser) 
          return done(null, false, req.flash('error', 'That username is already taken.'));

        //  If we're logged in, we're connecting a new local account.
        if(req.user) {
          var user            = req.user;
          user.local.username = username;
          user.local.email    = req.body.email;
          user.local.password = user.generateHash(password);
          user.save(function(err) {
            if (err)
              throw err;
            return done(null, user);
          });
        } else {
          //  We're not logged in, so we're creating a brand new user.
          var newUser            = new User();
          newUser.local.username = username;
          newUser.local.email    = req.body.email;
          newUser.local.password = newUser.generateHash(password);

          newUser.save(function(err) {
              if (err)
                  throw err;

              return done(null, newUser);
          });
        }
      });
    });

  }));

  // Local login

  passport.use('local-login', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with username
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  (req, username, password, done) => { // callback with username and password from our form
      User.findOne({ 'local.username' :  username }, (err, user) => {
          if (err)
              return done(err);

          if (!user || !user.validPassword(password))
              return done(null, false, req.flash('error', 'Incorrect username or password.'));

          return done(null, user);
      });
  }));


  //FaceBook Login

  var fbStrategy = configAuth.facebookAuth;
  fbStrategy.passReqToCallback = true;
  passport.use(new FacebookStrategy(fbStrategy,
  function(req, token, refreshToken, profile, done) {

    // asynchronous
    process.nextTick(function() {
      if (!req.user) {

          User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
              if (err)
                return done(err);
              if (user) {
                  if (!user.facebook.token) {
                    user.facebook.token = token;
                    user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                    user.facebook.email = (profile.emails[0].value || '').toLowerCase();

                    user.save(function(err) {
                      if (err)
                        return done(err);
                          
                      return done(null, user);
                    });
                  }

                  return done(null, user);
              } else {
                  var newUser            = new User();

                  newUser.facebook.id    = profile.id;
                  newUser.facebook.token = token;
                  newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                  newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();

                  newUser.save(function(err) {
                    if (err)
                      return done(err);
                        
                    return done(null, newUser);
                  });
              }
          });

      } else {
          var user            = req.user;
          user.facebook.id    = profile.id;
          user.facebook.token = token;
          user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
          user.facebook.email = (profile.emails[0].value || '').toLowerCase();

          user.save(function(err) {
            if (err)
              return done(err);
            return done(null, user);
          });
      }
    });
  }));
}
