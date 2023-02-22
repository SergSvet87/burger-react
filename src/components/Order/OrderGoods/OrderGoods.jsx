import React from "react";

import styles from "./OrderGoods.module.css";

export const OrderGoods = ({ title }) => {
  return (
    <>
      <img
        className={styles.image}
        src="img/burger_1.jpg"
        alt={title}
      />

      <div className={styles.goods}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.weight}>512г</p>

        <p className={styles.price}>
          1279
          <span className="currency">₽</span>
        </p>
      </div>
    </>
  );
};
