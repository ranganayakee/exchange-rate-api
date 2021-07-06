require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const routes = require('./app/routes');


const app = express();

app.use(cors())

require("./app/cache-service");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());

app.get('/', (_req, res) => {
	res.status(200).send('Please provide Api endpoint')
});

routes(app);

app.use((req, res, _next) => {
	res.status(404).json({
        error: 'Route Not found', 
		url : req.url 
    });
});

app.listen(process.env.APP_PORT || config.APP_PORT, () => {
	console.debug(`${config.APP_NAME} listening on port ${config.APP_PORT}`);
});

module.exports = app;
