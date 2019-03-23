var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);

// userService at server side will call this function
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;

// functions go here
function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByUsername(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.find({username: username, password: password});

}

function updateUser(userId, user) {
  return userModel.updateOne({_id: userId}, user);
}

function deleteUser(userId) {
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




