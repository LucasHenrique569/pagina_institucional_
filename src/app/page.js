

import React from "react";
import styles from "../../styles/home.module.css";
import ProductCarousel from "../../components/ProductCarousel";

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* HERO / BANNER */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Lorem ipsum dolor</h1>
          <div className={styles.heroText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section className={styles.about}>
        <h2>Sobre nós</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Missão e visão</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy
              auctor massa.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Valores</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy
              auctor massa.
            </p>
          </article>
        </div>
      </section>

      {/* PRODUTOS (CARROSSEL) */}
      <section className={styles.productsSection}>
        <h2>Confira alguns de nossos produtos</h2>
        <div className={styles.productsWrap}>
          <ProductCarousel />
        </div>
      </section>

      {/* CTA / NEWSLETTER */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <p>
            Cadastre - se em nosso site para receber emails com novidades e
            descontos exclusivos
          </p>
          <button className={styles.ctaButton}>Cadastre - se aqui</button>
        </div>
      </section>
    </main>
  );
}
