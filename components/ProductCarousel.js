// components/ProductCarousel.js
"use client";

import React, { useRef } from "react";
import styles from "../styles/carousel.module.css";

export default function ProductCarousel() {
  const trackRef = useRef(null);
  const products = ["Produto 1", "Produto 2", "Produto 3","Produto 1","Produto 1","Produto 1","Produto 1","Produto 1"];

  const scroll = (dir = 1) => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: dir * (width / 2), behavior: "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={() => scroll(-1)} aria-label="prev">
        ‹
      </button>

      <div className={styles.track} ref={trackRef}>
        {products.map((p, i) => (
          <div className={styles.productCard} key={i}>
            <div className={styles.productThumb} />
            <h3>{p}</h3>
          </div>
        ))}
      </div>

      <button className={styles.arrow} onClick={() => scroll(1)} aria-label="next">
        ›
      </button>
    </div>
  );
}
