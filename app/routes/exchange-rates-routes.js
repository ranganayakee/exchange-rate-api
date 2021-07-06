
"use strict";

const router = require("express").Router();
const exchangeRatesController = require("../exchange-rate/exchange-rate-controller");

router.get("/latest", exchangeRatesController.fetchAllLatestExchangeRates);

module.exports = router;