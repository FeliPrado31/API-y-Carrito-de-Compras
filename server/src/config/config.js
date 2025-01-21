const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    ERROR_MESSAGES: {
        PRODUCT_ID_REQUIRED: 'Product ID required',
        PRODUCT_NOT_FOUND: 'Product not found',
    },
    STATUS_CODES: {
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
    },
};