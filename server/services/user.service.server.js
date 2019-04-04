module.exports = function (app) {
  // fake data
  // var users = [
  //   {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
  //   {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
  //   {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
  //   {_id: "456", username: "jan", password: "jan", firstName: "Jose", lastName: "Annunzi"}
  // ];
  // var users = [
  //   new User("123", "alice", "alice", "Alice", "Wonder"),
  //   new User("234", "bob", "bob", "Bob", "Marley"),
  //   new User("345", "charly", "charly", "Charly", "Garcia"),
  //   new User("456", "jan", "jan", "Jose", "Annunzi" )
  // ];

  // db
  const userModel = require('../model/user/user.model.server');

  // encrypt
  var bcrypt = require("bcrypt-nodejs");

  // passport JS
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var facebookConfig = {
    // client id: the appId in facebook developer app.
    clientID: process.env.FACEBOOK_CLIENT_ID || '2142830432464373',

    // client secret: the secret in settings -> basic -> App Secret.
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'bccce688bdd9605ab3edb592a5764d20',

    // callbackURL: products Facebook Login settings -> Client OAuth Settings -> valid OAuth redirect URLs
    // the callback URL is customized by self. template: http://localhost:3000/auth/facebook/callback.
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || app.settings.baseUrl + '/auth/facebook/callback/'
  };
  // Store an encrypted representation of the user in a cookie.
  // This will allow Passport to maintain session information for the currently logged in user.
  passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
    return done(null, user);
  }

  passport.deserializeUser(function (user, done) {
    return userModel.findUserById(user._id)
      .then(function (user) {
        done(null, user);
      }, function (err) {
        done(err, null);
      });
  });

  // implement local strategy
  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username).then(
      function (user) {
        if (user && bcrypt.compareSync(password, user.password)) {
          console.log('password valid!');
          return done(null, user);
        } else {
          console.log('password failed.');
          return done(null, false);
        }
      }, function (err){
        console.log('err is ' + err);
        return done(err);
      });
  }


  // implement facebook login strategy
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function facebookStrategy(token, refreshToken, profile, done) {
    console.log('Backend: facebook strategy called');
    userModel.findUserByFacebookId(profile.id)
      .then(function (user) {
        if (user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            lastName: names[1],
            firstName: names[0],
            email: profile.emails ? profile.emails[0].value : "",
            facebook: {
              id: profile.id,
              token: token
            }
          };
          return userModel.createUser(newFacebookUser);

        }
      }, function (err) {
        if (err) {
          return done(err);
        }
      });
  }

  // api list
  // local strategy
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.get('/api/loggedIn', loggedin);

  app.post('/api/user', createUser);
  app.get('/api/user/', findUserByUsername);
  app.get('/api/user/all', findAllUsers); // only testing the connection between server and database.
  app.get('/api/user/:userid', findUserById);
  app.put('/api/user/:userid', updateUser);
  app.delete('/api/user/:userid', deleteUser);

  // facebook strategy
  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  // facebook strategy call back
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook',
      {failureRedirect: '/login'}),
    function (req, res) {
      // Successful authentication, redirect to profile page with user id.
      // console.log(req.user._id);
      const id = req.user._id;
      const url = '/user/' + id;
      return res.redirect(url);
    });


  // functions
  function login(req, res) {
    console.log('Backend: login() called');
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    console.log('Backend: logout() called');
    req.logOut();
    res.status(200).send({});
    // if only send status(200), then the return result is a string "OK".
    // which means the front end cannot parse the "OK" string.
    // must return something in json format. So here we just return {}.
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    return userModel.createUser(user).then(
      function (user) {
        if (user) {
          req.login(user, function (err) {
            if (err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      });
  }

  // check if passport has already authenticated the user in the session.
  function loggedin(req, res) {
    console.log('Backend: loggedin() called.');
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function findAllUsers(req, res) {
    //res.json(users);
    userModel.find().exec(
      function (err, users) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.json(users);
      }
    );
  }

  function createUser(req, res) {
    let user = req.body;
    userModel.createUser(user)
      .then(function (user) {
          res.status(200).send(user);
          return user;  // must return user here, in order to prevent further asynchronous calls.
        },
        function (err) {
          console.log('create user error! ' + err);
          res.sendStatus(400);
          return err;

        });
  }

  function findUserByUsername(req, res) {
    let username = req.query.username;
    userModel.findUserByUsername(username).exec(
      function (err, user) {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        if (user == null) {
          return res.sendStatus(404);
        }
        return res.status(200).send(user);
      }
    );
  }

  function findUserById(req, res) {
    // params must be the thing in the url placeholder
    let userId = req.params["userid"];
    userModel.findUserById(userId).exec(
      function (err, user) {
        if (err) {
          return res.status(400).send(err);
        }
        return res.json(user);
      }
    );

  }

  function updateUser(req, res) {
    let userId = req.params["userid"];
    let user = req.body;
    userModel.updateUser(userId, user).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.status(200).send(user);
      }
    );
  }

  function deleteUser(req, res) {
    let userId = req.params["userid"];
    userModel.deleteUser(userId).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
        }
        return res.status(200).send(user);
      }
    );
  }


};
