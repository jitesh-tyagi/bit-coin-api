"use strict";

const properties = require("../package.json");
const axios = require("axios");
// const distance = require('../service/distance');

const controllers = {
  about: (req, res) => {
    var aboutInfo = {
      name: properties.name,
      version: properties.version
    };
    res.json(aboutInfo);
  },

  getHistoricalPrice: async (req, res) => {
    const currency = req.query.currency || "INR";
    try {
      const response = await axios({
        url: `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`,
        method: "get"
      });

      if (response.status === 200) {
        res.send(response.data);
      }
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        res.send(`Currency ${currency} not supported`);
      } else {
        res.send(error);
      }
    }
  }
};

module.exports = controllers;
