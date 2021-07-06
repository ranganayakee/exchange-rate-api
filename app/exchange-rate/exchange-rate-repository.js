const config = require('../../config');
const api = require('../transport/api');

exports.fetchAllLatest = async () => {
    return api.get(`${config.EXCHANGE_RATE_BASE_URL}`);
};