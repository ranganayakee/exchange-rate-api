
require('dotenv').config()

const { env } = process

module.exports = {
	APP_NAME: env.APP_NAME,
    APP_PORT: env.APP_PORT,
	   
    REDIS_HOST: env.REDIS_HOST,
    REDIS_PORT: env.REDIS_PORT,
    REDIS_PASSWORD: env.REDIS_PASSWORD,

    EXCHANGE_RATE_BASE_URL: env.EXCHANGE_RATE_BASE_URL,
}
