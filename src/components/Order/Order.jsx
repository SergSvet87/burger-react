import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { orderRequestAsync } from "../../store/order/orderSlice.js";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice.js";
import { Count } from "../Count/Count.jsx";
import { OrderGoods } from "./OrderGoods/OrderGoods.jsx";

import styles from "./Order.module.css";

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(
    (state) => state.order
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={styles.order}>
      <section className={styles.wrapper}>
        <div
          className={styles.header}
          tabIndex="0"
          role="button"
        >
          <h2 className={styles.title}>Корзина</h2>

          <span className={styles.count}>{totalCount}</span>
        </div>

        <div className={styles.wrap_list}>
          <ul className={styles.list}>
            {orderGoods.map((item) => (
              <li
                key={item.id}
                className={styles.item}
              >
                <OrderGoods item={item} />

                <Count
                  count={item.count}
                  id={item.id}
                />
              </li>
            ))}
          </ul>

          <div className={styles.total}>
            <p>Итого</p>
            <p>
              <span className={styles.amount}>{totalPrice} </span>
              <span className="currency">&nbsp; ₽</span>
            </p>
          </div>

          <button
            className={styles.submit}
            disabled={orderGoods.length === 0}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            Оформить заказ
          </button>

          <div className={styles.apeal}>
            <p className={styles.text}>Бесплатная доставка</p>
            <button className={styles.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
