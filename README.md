# Node.js App that caches API Responses

Setup

To execute, create an env file at the root folder with the following variables: 
    APP_NAME=Api-Caching \
    APP_PORT=4001 \
    REDIS_HOST=Redis host\
    REDIS_PORT=Redis port\
    REDIS_PASSWORD=password\
    EXCHANGE_RATE_BASE_URL=https://open.exchangerate-api.com/v6/latest\ 

To connect directly to Redis using CLI: \
    redis-cli -h endpoint -p port -a password 
