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

  // passport JS
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
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
    userModel.findUserByCredentials(username, password).then(function (user) {

      if (user.username === username && user.password === password) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }, function (err) {
      if (err) {
        return done(err);
      }
    });
  }

  // api list
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/user', createUser);
  app.get('/api/user/', findUserByUsername);
  app.get('/api/user/all', findAllUsers); // only testing the connection between server and database.
  app.get('/api/user/:userid', findUserById);
  app.put('/api/user/:userid', updateUser);
  app.delete('/api/user/:userid', deleteUser);

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
          return res.sendStatus(400).send(err);
        }
        if (user == null) {
          return res.sendStatus(404);
        }
        return res.status(200).send(user);
      }
    );
  }

  function findUserByCred(res, username, password) {
    userModel.findUserByCredentials(username, password).exec(
      function (err, user) {
        if (err) {
          return res.sendStatus(400).send(err);
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
          return res.sendStatus(400).send(err);
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
