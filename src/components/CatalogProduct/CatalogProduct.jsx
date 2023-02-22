import React from "react";

import styles from "./CatalogProduct.module.css";

export const CatalogProduct = ({ title }) => {
  return (
    <article className={styles.product}>
      <img
        src="img/photo-5.jpg"
        alt={title}
        className={styles.image}
      />

      <p className={styles.price}>
        689<span className={styles.currency}>₽</span>
      </p>

      <h3 className={styles.title}>
        <button className={styles.detail}>{title}</button>
      </h3>

      <p className={styles.weight}>520г</p>

      <button
        className={styles.add}
        type="button"
      >
        Добавить
      </button>
    </article>
  );
};
