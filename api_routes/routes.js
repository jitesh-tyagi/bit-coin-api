"use strict";

const controller = require("../controllers");

module.exports = app => {
  app.route("/about").get(controller.about);
  app.route("/getHistoricalPrice").get(controller.getHistoricalPrice);
};
