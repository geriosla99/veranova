const productos = require('../data/productos.json');

// Obtener todos los productos
const getProductos = (req, res) => {
  res.json(productos);
};

// Obtener un producto por ID
const getProductoById = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  res.json(producto);
};

// Crear un nuevo producto
const createProducto = (req, res) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };
  productos.push(nuevoProducto); // Esto modificará la copia en memoria, no el archivo
  res.status(201).json(nuevoProducto);
};

// Actualizar un producto
const updateProducto = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

  producto.nombre = req.body.nombre || producto.nombre;
  producto.precio = req.body.precio || producto.precio;

  res.json(producto);
};

// Eliminar un producto
const deleteProducto = (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ mensaje: 'Producto no encontrado' });

  productos.splice(index, 1);
  res.status(204).send();
};

// Exportar todas las funciones
module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
