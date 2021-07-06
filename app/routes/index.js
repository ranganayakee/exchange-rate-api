'use strict';

const exchangeRatesRouter = require("./exchange-rates-routes");

module.exports = (app) => app.use("/exchange-rates", exchangeRatesRouter);
