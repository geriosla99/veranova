import React from 'react';
import './Inicio.css'; // Asegúrate de tener un archivo CSS para estilos

const Inicio = () => {
    return (
        <div className="home-container" style={{ padding: '2rem', textAlign: 'center' }}>
            <h1><img src="https://i.imgur.com/H3efoh7.png" alt="Descripción de la imagen" style={{ width: '12rem' }} /></h1>
            <p>
                Explora nuestra plataforma para descubrir las mejores soluciones y servicios.
            </p>
            <div>
                <a href="/contacto" className="btn btn-secondary">
                    Contáctanos
                </a>
            </div>
        </div>
    );
};

export default Inicio;