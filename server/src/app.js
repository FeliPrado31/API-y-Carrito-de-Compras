const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.use(errorHandler);

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}