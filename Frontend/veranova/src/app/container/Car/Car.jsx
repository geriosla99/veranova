"use client";

import React from "react";
import "./car.css";

const Car = ({ cart, setCart, onBack }) => {
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.precio * item.quantity,
    0
  );

  return (
    <div className="car-container">
      <button onClick={onBack}>Volver</button>

      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              {item.nombre} x {item.quantity} = $
              {item.precio * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Car;
