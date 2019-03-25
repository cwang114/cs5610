var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var userModel = require("../user/user.model.server");
var websiteModel = mongoose.model('Website', websiteSchema);

// websiteService at server side will call this function
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

// functions go here
function createWebsiteForUser(userId, website) {
  console.log('Mongoose: createWebsite() called');
  // first, create the website with the name, description, date, etc.
  return websiteModel.create(website)
    .then(function (responseWebsite) {
      // next, for the current user, push this website into user's website list.
      userModel.findUserById(userId)
        .then(function (user) {
          user.websites.push(responseWebsite);
          return user.save();
        })
    });
}

function findAllWebsitesForUser(userId) {
  console.log('Mongoose: findAllWebsitesForUser() called');
  return websiteModel.find({"_user": userId})
    .populate('_user', '_id')       // Do not append all the user info here. Just populate user with its id.
    .exec(
      function (err, website) {
        if (err) return handleError(err);
        // console.log('The website\'s user is %s', website.user._id);
        // prints "The author is Ian Fleming"
      }
    );

}

function findWebsiteById(websiteId) {
  console.log('Mongoose: findWebsiteById() called: ' + websiteId);
  return websiteModel.findOne({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  console.log('Mongoose: updateWebsite() called');
  return websiteModel.updateOne({_id: websiteId}, website);
}

function deleteWebsite(userId, websiteId) {
  console.log('Mongoose: deleteWebsite() called');
  // first, find the original website
  websiteModel.findOne({_id: websiteId})
    .then(function (responseWebsite) {
      // next, for the current user, delete this website from user's website list.
      userModel.findUserById(userId)
        .then(function (user) {
          user.websites.pull({ _id: responseWebsite._id });
          return user.save();
        });
      return responseWebsite;
    });
  // then, delete this website
  return websiteModel.deleteOne({_id: websiteId});


}

function findAllWebsites() {
  websiteModel.find(function (err, website) {
    console.log(website);
  })
}




