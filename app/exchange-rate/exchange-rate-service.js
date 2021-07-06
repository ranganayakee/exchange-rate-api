"use strict";

const exchangeRateRepository = require("./exchange-rate-repository");

exports.fetchAllLatest = async () => {
    
    const cacheKey = "exchange-rates-latest";

    const exchangeRates = await cache.getAsync(cacheKey);
    console.debug("Data from cache", exchangeRates);
    
    if(exchangeRates) {
        return {data: JSON.parse(exchangeRates)};
    }

    const {error, data} = await exchangeRateRepository.fetchAllLatest();
    if(error) {
        return {error};
    }
  
    await cache.setAsync(cacheKey, JSON.stringify(data));
    const cacheValidityTime = data.time_next_update_unix;
    cache.expireAsync(cacheKey, cacheValidityTime);
    console.debug("Data To cache", data);
    return {
        data
    };
};