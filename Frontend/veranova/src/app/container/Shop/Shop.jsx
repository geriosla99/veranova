import React, { useState, useEffect } from 'react';

const Shop = ({ cart, setCart }) => {
  const [productsApi, setProductsApi] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar productos desde la API al montar
  useEffect(() => {
    fetch('https://veranova.onrender.com/api/productos')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then(data => {
        setProductsApi(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('No se pudieron cargar los productos.');
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        // Si ya existe, aumentamos cantidad
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no existe, lo agregamos con quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const total = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <div style={{ padding: 25 }}>
      <h2>Artículos disponibles</h2>

      {loading && <p>Cargando productos…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div
        style={{
          display: 'grid',
          gap: 30,
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
          marginTop: 24,
        }}
      >
        {!loading && !error && productsApi.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: 16,
              borderRadius: 8,
              width: '100%',
              boxSizing: 'border-box',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {product.imagen && (
              <img
                src={product.imagen}
                alt={product.nombre}
                style={{ width: '100%', height: 120, marginBottom: 8, borderRadius: 4 }}
              />
            )}
            <h3 style={{ margin: '12px 0 6px 0', textAlign: 'center' }}>{product.nombre}</h3>
            <p style={{ fontSize: 14, color: '#555', textAlign: 'center' }}>{product.descripcion}</p>
            <p style={{ margin: '8px 0', fontWeight: 'bold' }}>
              <strong>Precio:</strong> ${product.precio}
            </p>
            <button onClick={() => addToCart(product)} style={{ marginTop: 'auto' }}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
