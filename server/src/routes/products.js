const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene la lista de productos
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 */
router.get('/', productController.getProducts);

module.exports = router;