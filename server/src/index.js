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
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
    })
);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

app.use(errorHandler);

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        logger.info(`Server running on http://localhost:${PORT}`);
    });
}