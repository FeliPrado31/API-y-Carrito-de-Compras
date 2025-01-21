const { STATUS_CODES } = require('../config/constants');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.message === 'Product not found') {
        return res.status(STATUS_CODES.NOT_FOUND).json({ error: err.message });
    }

    res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ error: 'Something went wrong!' });
};

module.exports = errorHandler;