import React from 'react';
import styles from '../../../styles/ContatoPage.module.css';

export default function  ContatoPage() {
  return (
    <main className={styles.mainContent}>
      
      {/* Título da Seção */}
      <h2 className={styles.sectionTitle}>Entre em contato conosco</h2>
      
      {/* Formulário de Contato */}
      <form className={styles.contactForm}>
        
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Nome (empresa ou pessoal):</label>
          <input type="text" id="fullName" name="fullName" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="6" />
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
        
      </form>
      
    </main>
  );
}
