import React from 'react';
import styles from "../../../styles/CadastroPage.module.css";

function ClientRegistrationContent() {
  return (
    <main className={styles.mainContent}>
      
      {/* Título da Seção */}
      <h2 className={styles.sectionTitle}>Cadastro de Clientes</h2>
      
      {/* Linha Divisória */}
      <hr className={styles.divider} />

      {/* Seção do Formulário */}
      <section className={styles.registrationSection}>
        <h3 className={styles.formTitle}>Cadastrar - se</h3>
        
        <form className={styles.clientForm}>
          
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Nome completo (ou nome da empresa):</label>
            <input type="text" id="fullName" name="fullName" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          
          <button type="submit" className={styles.registerButton}>
            Registrar
          </button>
          
        </form>
      </section>
      
    </main>
  );
}


export default function CadastroPage() {
  return (
    <>
     
      <ClientRegistrationContent /> 
     
    </>
  );
}