import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada a ofrecer los mejores productos con el
            mejor servicio al cliente. Nuestra misión es brindar calidad y
            confianza en cada compra.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Enlaces</h2>
          <ul>
            <li>
              <a>Acerca de</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Política de Privacidad</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contacto</h2>
          <p>Email: contacto@ejemplo.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Tienda Deportes. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
