require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./config/logger');
const swaggerDocs = require('./config/swagger');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(
    cors({
        origin: "http://localhost:3000", // Permite solicitudes desde este origen
        methods: "GET,POST,PUT,DELETE", // Métodos HTTP permitidos
        allowedHeaders: "Content-Type,Authorization", // Cabeceras permitidas
    })
);

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