var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var pageModel = require("../page/page.model.server");
var widgetModel = mongoose.model('Widget', widgetSchema);

// widgetService at server side will call this function
widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

// functions go here
function createWidget(pageId, widget) {
  console.log('Mongoose: createWidget() called');
  // first, create the widget with the name, description, date, etc.
  return widgetModel.create(widget)
    .then(function (responseWidget) {
      // next, for the current page, push this widget into page's widget list.
      pageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.push(responseWidget);
          return page.save();
        });
      return responseWidget;
      // must return responseWidget here for frontend to immediately get responseWidget info after creating widget.
    });
}

function findAllWidgetsForPage(pageId) {
  console.log('Mongoose: findAllWidgetsForPage() called: pageId: '+pageId);
  return widgetModel.find({_page: pageId})
    .populate('_page', '_id');      // Do not append all the page info here. Just populate page with its id.

}

function findWidgetById(widgetId) {
  console.log('Mongoose: findWidgetById() called: ' + widgetId);
  return widgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  console.log('Mongoose: updateWidget() called');
  return widgetModel.updateOne({_id: widgetId}, widget);
}

function deleteWidget(pageId, widgetId) {
  console.log('Mongoose: deleteWidget() called');
  // first, find the original widget
  widgetModel.findOne({_id: widgetId})
    .then(function (responseWidget) {
      // next, for the current page, delete this widget from page's widget list.
      pageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.pull({ _id: responseWidget._id });
          return page.save();
        });
      return responseWidget;
    });
  // then, delete this widget
  return widgetModel.deleteOne({_id: widgetId});



}

function reorderWidget(pageId, start, end) {
  console.log('Mongoose: reorderWidget() called, start is ' + start + ', end is ' + end);
  // TODO: implement reorder widget
}

function findAllWidgets() {
  widgetModel.find(function (err, widget) {
    console.log(widget);
  })
}




