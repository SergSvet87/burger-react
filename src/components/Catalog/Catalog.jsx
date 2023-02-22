import React from "react";

import { Container } from "../Container/Container.jsx";
import { Order } from "../Order/Order.jsx";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct.jsx";

import styles from "./Catalog.module.css";

const goodsList = [
  { title: "Мясная бомба" },
  { title: "Супер сырный" },
  { title: "Сытный" },
  { title: "Итальянский" },
  { title: "Вечная классика" },
  { title: "Тяжелый удар" },
];

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />

        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бургеры</h2>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
              {goodsList.map((item, ind) => (
                <li key={ind} className={styles.item}>
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
