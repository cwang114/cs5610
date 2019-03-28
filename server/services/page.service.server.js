module.exports = function(app) {
  // fake data
  // var pages=[
  //   { "_id": "321", "name": "Post 1", "pageId": "456", "title": "Lorem" },
  //   { "_id": "432", "name": "Post 2", "pageId": "456", "title": "Lorem" },
  //   { "_id": "543", "name": "Post 3", "pageId": "456", "title": "Lorem" }
  //
  // ];

  const pageModel = require('../model/page/page.model.server');

  // api list
  
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findPagesByWebsite);
  app.get('/api/website/:websiteId/page/:pageId', findPageById);
  app.put('/api/website/:websiteId/page/:pageId', updatePage);
  app.delete('/api/website/:websiteId/page/:pageId', deletePage);
  app.get('/api/page/all', findAllPages);     // only for testing


  // function list
  function findAllPages(req, res) {
    pageModel.find().exec(
      function (err, pages) {
        if (err) {
          return res.status(400).send(err);
        }
        return res.json(pages);
      }
    );
  }
  
  function createPage(req, res) {
    var page = req.body;
    var websiteId = req.params['websiteId'];
    page._website = websiteId;
    delete page._id;
    pageModel.createPage(websiteId, page)
      .then(function (page) {
          res.status(200).send(page);
          return page;  // must return page here, in order to prevent further asynchronous calls.
        },
        function (err) {
          console.log('create page error! ' + err);
          res.sendStatus(400);
          return err;

        });
  }

  function findPagesByWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        return res.status(200).json(pages);
      })

  }
  
  function findPageById(req, res){
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId).exec(
      function (err, page) {
        if (err) {
          return res.status(400).send(err);
        }
        if (page == null) {
          return res.sendStatus(404);
        }
        return res.status(200).send(page);
      }
    );

  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var page = req.body;

    pageModel.updatePage(pageId, page).exec(
      function (err, page) {
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(200).send(page);
      }
    );
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    pageModel.deletePage(websiteId, pageId).exec(
      function (err, page) {
        if (err) {
          return res.status(400).send(err);
        } else {
          return res.status(200).send(page);
        }

      }
    );
  }
};
