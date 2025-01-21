const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Agrega un producto al carrito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Producto agregado al carrito
 *       400:
 *         description: ID del producto requerido
 *       404:
 *         description: Producto no encontrado
 */
router.post('/', cartController.addToCart);

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Obtiene el carrito de compras
 *     responses:
 *       200:
 *         description: Carrito obtenido exitosamente
 */
router.get('/', cartController.getCart);

module.exports = router;