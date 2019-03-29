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
  console.log('Mongoose: findAllWidgetsForPage() called: pageId: ' + pageId);
  // Directly return the widgets array inside page.
  return pageModel.findOne({_id: pageId}).then(function (page) {
    return page.widgets;

  });
}

function findWidgetById(widgetId) {
  console.log('Mongoose: findWidgetById() called: ' + widgetId);
  return widgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  console.log('Mongoose: updateWidget() called');
  // first, find that widget in page, and update the page widget array.
  pageModel.findOneAndUpdate(
    {"_id": widget._page, "widgets._id": widgetId},
    {
      "$set": {
        "widgets.$": widget
      }
    },
    {returnNewDocument: true, useFindAndModify: false},
  ).then(function (page) {
    // Save page after updating.
    return page.save();

  });
  // then, inside widget collection, update the widget and return.
  return widgetModel.findOneAndUpdate({_id: widgetId}, widget, {useFindAndModify: false});

}

function deleteWidget(pageId, widgetId) {
  console.log('Mongoose: deleteWidget() called');
  // first, find the original widget
  widgetModel.findOne({_id: widgetId})
    .then(function (responseWidget) {
      // next, for the current page, delete this widget from page's widget list.
      pageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.pull({_id: responseWidget._id});
          return page.save();
        });
      return responseWidget;
    });
  // then, delete this widget
  return widgetModel.deleteOne({_id: widgetId});


}

function reorderWidget(pageId, start, end) {

  console.log('Mongoose: reorderWidget() called, start is ' + start + ', end is ' + end);
  // first, find widget array inside current page.
  return pageModel.findOneAndUpdate({_id: pageId}).then(function (page) {
    // then, reorder in that widget array in the page.
    widgetArray = page.widgets;
    var startItem = widgetArray[start];
    widgetArray.splice(start, 1);
    widgetArray.splice(end, 0, startItem);
    page.widgets = widgetArray;
    return page.save();
  });
}

function findAllWidgets() {
  widgetModel.find(function (err, widget) {
    console.log(widget);
  })
}




