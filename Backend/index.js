const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
app.use(express.json());

// Rutas
const productosRouter = require('./routes/productos');
app.use('/api/productos', productosRouter);

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/api-docs`);
});

// Ruta de documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));