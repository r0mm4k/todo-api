// Require environmental variables
require('dotenv').config();

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
	logger: true
});

// Require external modules
const mongoose = require('mongoose');

// Import Routes
const routes = require('./routes');

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Register CORS
fastify.register(require('fastify-cors'), {
	'Access-Control-Allow-Origin': 'https://todo-r0mm4k.netlify.com/',
	vary: 'Origin',
	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});

// Connect to DB
const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${user}:${pass}@todo-api-mpqwn.azure.mongodb.net/todo-api`, {useNewUrlParser: true})
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

// Loop over each route
routes.forEach((route, index) => {
	fastify.route(route)
});

// Run the server!
const start = async () => {
	try {
		await fastify.listen(PORT, '0.0.0.0');
		fastify.swagger();
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();
