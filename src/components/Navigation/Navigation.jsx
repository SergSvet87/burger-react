import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { changeCategory } from "../../store/category/categorySlice.js";
import { Container } from "../Container/Container.jsx";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  return (
    <nav className={styles.navigation}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {category.map((item, ind) => (
            <li
              key={ind}
              className={styles.item}
            >
              <button
                className={classNames(
                  styles.button,
                  activeCategory === ind ? styles.button_active : ""
                )}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => {
                  dispatch(
                    changeCategory({
                      indexCategory: ind,
                    })
                  );
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
