import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productRequestAsync } from "../../store/product/productSlice.js";
import { Container } from "../Container/Container.jsx";
import { Order } from "../Order/Order.jsx";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct.jsx";

import styles from "./Catalog.module.css";

export const Catalog = () => {
  const { products } = useSelector((state) => state.product);
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={styles.catalog}>
      <Container>
        <div className={styles.container}>
          <Order />

          <div className={styles.wrapper}>
            <h2 className={styles.title}>{category[activeCategory]?.rus}</h2>

            {products.length ? (
              <div className={styles.wrap_list}>
                <ul className={styles.list}>
                  {products.map((item) => (
                    <li
                      key={item.id}
                      className={styles.item}
                    >
                      <CatalogProduct item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className={styles.alert}>К сожалению товаров данной категории нет :(</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
