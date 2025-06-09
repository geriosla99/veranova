import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} VeraNova. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;