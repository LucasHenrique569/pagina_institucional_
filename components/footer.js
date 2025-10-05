"use client";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <p>Nossas redes sociais</p>
        <div className="icones">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
        </div>
      </div>

      <div className="footer-section">
        <p>Nome da empresa</p>
      </div>
    </footer>
  );
}
