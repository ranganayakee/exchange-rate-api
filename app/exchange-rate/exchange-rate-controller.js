"use strict";

const exchangeRateService = require("./exchange-rate-service");

const {
    sendErrorResponse,
    sendResponse
  } = require("../../helpers/response.helpers");

exports.fetchAllLatestExchangeRates = async (_req, res, _next) => {
    debugger;
    const {error, data} = await exchangeRateService.fetchAllLatest();
    if (error) {
        return sendErrorResponse({res, message: error});
    }

    return sendResponse({res, responseBody: data});
};