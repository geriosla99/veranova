const express = require('express');
const router = express.Router();
const productosController = require('../controllers/ProductosController');

router.get('/', productosController.getProductos);
router.get('/:id', productosController.getProductoById);
router.post('/', productosController.createProducto);
router.put('/:id', productosController.updateProducto);
router.delete('/:id', productosController.deleteProducto);

module.exports = router;
