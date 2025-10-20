// app/leads/page.js

import styles from '../../../styles/leads.module.css';

export default function RelatorioLeadsPage() {
  return (
    <div className={styles.relatorioContainer}>
      
      <div className={styles.relatorioCard}>
        
        {/* Título Principal */}
        <h1 className={styles.mainTitle}>Relatório de leads</h1>
        
        {/* Linha Divisória */}
        <hr className={styles.divider} />

        {/* Wrapper para centralizar e controlar o padding lateral */}
        <div className={styles.contentWrapper}>
          
          {/* Seção de Filtro (Data) */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Filtro (data):</label>
            
            <span className={styles.dateLabel}>De</span>
            <input type="date" className={styles.dateInput} />
            
            <span className={styles.dateLabel}>Até</span>
            <input type="date" className={styles.dateInput} />
            
            <button className={styles.applyButton}>Aplicar</button>
          </div>
          
          {/* Tabela de Dados */}
          <div className={styles.tableContainer}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Data</th>
                  <th className={styles.tableHeader}>Nome</th>
                  <th className={styles.tableHeader}>Email</th>
                  <th className={styles.tableHeader}>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {/* Linhas de exemplo (Você preencherá isso dinamicamente) */}
                <tr>
                  <td className={styles.tableData}>01/01/2024</td>
                  <td className={styles.tableData}>João Silva</td>
                  <td className={styles.tableData}>joao@exemplo.com</td>
                  <td className={styles.tableData}>(99) 99999-9999</td>
                </tr>
                <tr>
                  <td className={styles.tableData}>02/01/2024</td>
                  <td className={styles.tableData}>Maria Oliveira</td>
                  <td className={styles.tableData}>maria@exemplo.com</td>
                  <td className={styles.tableData}>(99) 99999-9999</td>
                </tr>
                {/* Adicione mais linhas aqui... */}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
}