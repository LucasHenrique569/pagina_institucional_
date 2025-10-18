// app/produtos/cadastro/page.js

import styles from '../../../styles/cadastroProdutos.module.css';

export default function CadastroProdutoPage() {
  return (
    <div className={styles.cadastroContainer}>
      
      <div className={styles.cadastroCard}>
        
        <h1 className={styles.mainTitle}>Cadastro de Produtos</h1>
        <hr className={styles.divider} />

        {/* NOVO: Wrapper para controlar o tamanho máximo do formulário */}
        <div className={styles.formWrapper}>
          
          <form className={styles.cadastroForm}>
            
            {/* Campo Nome */}
            <div className={styles.inputGroup}>
              <label htmlFor="nome" className={styles.label}>Nome:</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                className={styles.input} 
              />
            </div>

            {/* Campo Descrição */}
            <div className={styles.inputGroup}>
              <label htmlFor="descricao" className={styles.label}>Descrição:</label>
              <input 
                type="text" 
                id="descricao" 
                name="descricao" 
                className={styles.input}
              />
            </div>

            {/* Campo Preço */}
            <div className={styles.inputGroup}>
              <label htmlFor="preco" className={styles.label}>Preço:</label>
              <input 
                type="number" 
                id="preco" 
                name="preco" 
                className={styles.input}
              />
            </div>
            
            {/* Campo Imagem (com Input File oculto) */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Imagem:</label>
              <div className={styles.imageInputWrapper}>
                <input 
                  type="file" 
                  id="imagem" 
                  name="imagem" 
                  className={styles.hiddenInput}
                />
                <label htmlFor="imagem" className={styles.fileButton}>
                  Escolher imagem
                </label>
              </div>
            </div>

            {/* Botão Registrar */}
            <button type="submit" className={styles.registerButton}>
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}