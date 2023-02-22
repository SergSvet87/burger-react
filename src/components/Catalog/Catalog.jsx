import React from "react";

import { Container } from "../Container/Container.jsx";
import { Order } from "../Order/Order.jsx";

import styles from "./Catalog.module.css";

export const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />
        
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бургеры</h2>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <article className={styles.product}>
                  <img
                    src="img/photo-5.jpg"
                    alt="Мясная бомба"
                    className={styles.product__image}
                  />

                  <p className={styles.product__price}>
                    689<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>
                      Мясная бомба
                    </button>
                  </h3>

                  <p className={styles.product__weight}>520г</p>

                  <button
                    className={styles.product__add}
                    type="button"
                  >
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.item}>
                <article className={styles.product}>
                  <img
                    src="img/photo-1.jpg"
                    alt="Супер сырный"
                    className={styles.product__image}
                  />

                  <p className={styles.product__price}>
                    550<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>
                      Супер сырный
                    </button>
                  </h3>

                  <p className={styles.product__weight}>512г</p>

                  <button
                    className={styles.product__add}
                    type="button"
                  >
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.item}>
                <article className={styles.product}>
                  <img
                    src="img/photo-3.jpg"
                    alt="Сытный"
                    className={styles.product__image}
                  />

                  <p className={styles.product__price}>
                    639<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>Сытный</button>
                  </h3>

                  <p className={styles.product__weight}>580г</p>

                  <button
                    className={styles.product__add}
                    type="button"
                  >
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.item}>
                <article className={styles.product}>
                  <img
                    src="img/photo.jpg"
                    alt="Тяжелый удар"
                    className={styles.product__image}
                  />

                  <p className={styles.product__price}>
                    480<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>
                      Тяжелый удар
                    </button>
                  </h3>

                  <p className={styles.product__weight}>470г</p>

                  <button
                    className={styles.product__add}
                    type="button"
                  >
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.item}>
                <article className={styles.product}>
                  <img
                    src="img/photo-2.jpg"
                    alt="Вечная классика"
                    className={styles.product__image}
                  />

                  <p className={styles.product__price}>
                    450<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>
                      Вечная классика
                    </button>
                  </h3>

                  <p className={styles.product__weight}>450г</p>

                  <button
                    className={styles.product__add}
                    type="button"
                  >
                    Добавить
                  </button>
                </article>
              </li>

              <li className={styles.item}>
                <article className={styles.product}>
                  <img
                    src="img/photo-4.jpg"
                    alt="Итальянский"
                    className={styles.product__image}
                  />

                  <p className={styles.product__price}>
                    560<span className={styles.currency}>₽</span>
                  </p>

                  <h3 className={styles.product__title}>
                    <button className={styles.product__detail}>
                      Итальянский
                    </button>
                  </h3>

                  <p className={styles.product__weight}>510г</p>

                  <button
                    className={styles.product__add}
                    type="button"
                  >
                    Добавить
                  </button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
