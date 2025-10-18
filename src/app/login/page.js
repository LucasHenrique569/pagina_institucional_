'use client'

import styles from '../../../styles/LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      
      {/* NOVO CONTAINER (loginWrapper) para centralizar TÍTULO e CARD juntos */}
      <div className={styles.loginWrapper}>
        
        {/* Título "Login" - Fica FORA do Card, mas dentro do Wrapper */}
        <h1 className={styles.title}>Login</h1>
        
        {/* O CARD CINZA (loginCard) que contém APENAS o formulário e o botão */}
        <div className={styles.loginCard}>
          <form className={styles.loginForm}>
            
            {/* Campo Usuário */}
            <div className={styles.inputGroup}>
              <label htmlFor="usuario" className={styles.label}>Usuário:</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                className={styles.input}
              />
            </div>

            {/* Campo Senha */}
            <div className={styles.inputGroup}>
              <label htmlFor="senha" className={styles.label}>Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                className={styles.input}
              />
            </div>

            {/* Botão Entrar */}
            <button type="submit" className={styles.button}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}