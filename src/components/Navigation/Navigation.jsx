import React, { useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { API_URI } from "../../../const.js";
import {
  categoryRequestAsync,
  changeCategory,
} from "../../store/category/categorySlice.js";
import { Container } from "../Container/Container.jsx";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync("max"));
  }, []);

  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.container}>
          <ul className={styles.list}>
            {category.map((item, ind) => (
              <li
                key={item.title}
                className={styles.item}
              >
                <button
                  className={classNames(
                    styles.button,
                    activeCategory === ind ? styles.button_active : ""
                  )}
                  style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
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
        </div>
      </Container>
    </nav>
  );
};
