require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./config/logger');

const app = express();
const PORT = process.env.PORT || 3000;


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Carrito de Compras',
            version: '1.0.0',
            description: 'API para gestionar productos y un carrito de compras',
        },
        servers: [{ url: `http://localhost:${PORT}` }],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.use(errorHandler);

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        logger.info(`Server running on http://localhost:${PORT}`);
    });
}