// Footer.js (Versão Corrigida)
"use client";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      {/* A imagem mostra "Nossas redes sociais" no topo, 
        e os ícones logo abaixo, alinhados à esquerda.
      */}
      <div className="footer-section social-section">
        <p>Nossas redes sociais</p>
        <div className="icones">
          {/* Ícone do Instagram mais arredondado (fa-instagram) */}
          <i className="fa-brands fa-instagram"></i> 
          {/* Trocado o Facebook pelo YouTube */}
          <i className="fa-brands fa-youtube"></i> 
        </div>
      </div>

      {/* A imagem mostra "Nome da empresa" alinhado à direita.
        Ajustaremos o CSS para que ele não fique em coluna.
      */}
      <div className="footer-section company-name-section">
        <p>Nome da empresa</p>
      </div>
    </footer>
  );
}