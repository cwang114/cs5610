var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);

// userService at server side will call this function
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByFacebookId = findUserByFacebookId;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;

// functions go here
function createUser(user) {
  console.log('Mongoose: createUser() called');
  return userModel.create(user);
}

function findUserById(userId) {
  console.log('Mongoose: findUserById() called: '+userId);
  return userModel.findById(userId);
}

function findUserByFacebookId(facebookId) {
  console.log('Mongoose: findUserByFBId() called: ' + facebookId);
  return userModel.findOne({'facebook.id': facebookId});
}

function findUserByUsername(username) {
  console.log('Mongoose: findUserByUsername() called');
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  console.log('Mongoose: findUserByCredentials() called');
  return userModel.findOne({username: username, password: password});

}

function updateUser(userId, user) {
  console.log('Mongoose: updateUser() called');
  return userModel.updateOne({_id: userId}, user);
}

function deleteUser(userId) {
  console.log('Mongoose: deleteUser() called');
  return userModel.deleteOne({_id: userId}, function (err) {
      if (err) {
        return handleError(err);
      } else {
        return null;
      }
    }
  );

}

function findAllUsers() {
  userModel.find(function (err, user) {
    console.log(user);
  })
}




