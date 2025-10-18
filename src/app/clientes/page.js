

import React from 'react';
import styles from "../../../styles/CadastroPage.module.css"; 

export default function CadastroPage() {
  return (
    <div className={styles.cadastroContainer}>
      
      <div className={styles.cadastroCard}>
        
        {/* Título Principal: Agora usando a classe mainTitle */}
        <h1 className={styles.mainTitle}>Cadastro de Clientes</h1>
        
        {/* Linha Divisória */}
        <hr className={styles.divider} />

        {/* Wrapper para Form: Mantemos o wrapper para controle de largura */}
        <div className={styles.formWrapper}>
          
          <form className={styles.cadastroForm}>
            
            {/* Campo Nome/Empresa */}
            <div className={styles.inputGroup}>
              {/* Usamos a classe label e alinhamos à direita */}
              <label htmlFor="fullName" className={styles.label}>Nome (ou empresa):</label>
              <input type="text" id="fullName" name="fullName" className={styles.input} />
            </div>

            {/* Campo Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email:</label>
              <input type="email" id="email" name="email" className={styles.input} />
            </div>

            {/* Campo Telefone */}
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>Telefone:</label>
              <input type="tel" id="phone" name="phone" className={styles.input} />
            </div>
            
            {/* Botão Registrar (Alinhado à direita) */}
            <button type="submit" className={styles.registerButton}>
              Registrar
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
