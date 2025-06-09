"use client";

import React, { useState } from "react";
import Navbar from "./container/navbar/navbar";
import Inicio from "./container/Inicio/Inicio";
import Car from "./container/Car/Car";
import Footer from "./container/Footer/Footer";
import Shop from "./container/Shop/Shop";

export default function Home() {
  const [showCar, setShowCar] = useState(false);
  const [cart, setCart] = useState([]);

  // Abre el carrito
  const handleCarClick = () => setShowCar(true);
  // Cierra el carrito y vuelve al shop
  const handleBackClick = () => setShowCar(false);

  // Suma todas las cantidades en el carrito
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar onCarClick={handleCarClick} cartCount={cartCount} />

      {!showCar ? (
        <Inicio /* si necesitas pasar algo a Inicio */ />
      ) : (
        <Car
          cart={cart}
          setCart={setCart}
          onBack={handleBackClick}
        />
      )}
      <Shop cart={cart} setCart={setCart}/>
      <Footer />
    </div>
  );
}
