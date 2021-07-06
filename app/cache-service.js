"use strict";

const redis = require("redis");
const {promisify} = require("util");
const config = require('../config');

const redisClient = redis.createClient(
    {
        host: config.REDIS_HOST,
        port: config.REDIS_PORT,
    }
);

if (config.REDIS_PASSWORD) {
    redisClient.auth(config.REDIS_PASSWORD, (err) => {
      if (err) throw err;
    });
};

redisClient.on('connect', () => console.debug('Connected to Redis'));

redisClient.on('error', (err) => console.error('Redis Connection Error:', err));

try {
    redisClient.getAsync = promisify(redisClient.get).bind(redisClient);
    redisClient.setAsync = promisify(redisClient.set).bind(redisClient);
    redisClient.expireAsync = promisify(redisClient.expire).bind(redisClient);
} catch (e) {
    console.error("Redis error", e);
}


setInterval(() =>  {
    console.debug("Keeping alive: Redis");
    redisClient.set('ping', 'pong');
}, 1000 * 60 * 4);


global.cache = redisClient;
module.exports = redisClient;