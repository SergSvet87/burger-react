import React from "react";

import { API_URI } from "../../../../const.js";

import styles from "./OrderGoods.module.css";

export const OrderGoods = ({ item }) => {
  return (
    <>
      <img
        className={styles.image}
        src={`${API_URI}/${item.image}`}
        alt={item.title}
      />

      <div className={styles.goods}>
        <h3 className={styles.title}>{item.title}</h3>

        <p className={styles.weight}>{item.weight} г</p>

        <p className={styles.price}>
          {item.price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>
    </>
  );
};
