import React from "react";
import { format } from "date-fns";

import logo from "../../assets/img/logo-o.svg";
import { Container } from "../Container/Container.jsx";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <img
            className={styles.logo}
            src={logo}
            alt="Логотип YourMeal"
          />

          <address className={styles.address}>
            <div className={styles.contact}>
              <h2 className={styles.title}>Номер для заказа</h2>

              <a
                className={styles.phone}
                href="tel:+79308333811"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" />
                </svg>

                <span>+3(777)123-44-11</span>
              </a>
            </div>

            <div className={styles.contact}>
              <h2 className={(styles.title, styles.title_sn)}>Мы в соцсетях</h2>

              <ul className={styles.list}>
                <li className={styles.item}>
                  <a
                    href="#"
                    className={styles.sn}
                    aria-label="группа в вк"
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 0C8.05875 0 0 8.05875 0 18C0 27.9412 8.05875 36 18 36C27.9412 36 36 27.9412 36 18C36 8.05875 27.9412 0 18 0ZM24.9225 20.3081C24.9225 20.3081 26.5144 21.8794 26.9062 22.6087C26.9175 22.6237 26.9231 22.6387 26.9269 22.6462C27.0862 22.9144 27.1237 23.1225 27.045 23.2781C26.9137 23.5369 26.4637 23.6644 26.31 23.6756H23.4975C23.3025 23.6756 22.8937 23.625 22.3987 23.2837C22.0181 23.0175 21.6431 22.5806 21.2775 22.155C20.7319 21.5212 20.2594 20.9738 19.7831 20.9738C19.7226 20.9736 19.6625 20.9831 19.605 21.0019C19.245 21.1181 18.7838 21.6319 18.7838 23.0006C18.7838 23.4281 18.4462 23.6737 18.2081 23.6737H16.92C16.4812 23.6737 14.1956 23.52 12.1706 21.3844C9.69187 18.7687 7.46062 13.5225 7.44187 13.4737C7.30125 13.1344 7.59187 12.9525 7.90875 12.9525H10.7494C11.1281 12.9525 11.2519 13.1831 11.3381 13.3875C11.4394 13.6256 11.8106 14.5725 12.42 15.6375C13.4081 17.3737 14.0138 18.0787 14.4994 18.0787C14.5904 18.0777 14.6799 18.0545 14.76 18.0112C15.3937 17.6587 15.2756 15.3994 15.2475 14.9306C15.2475 14.8425 15.2456 13.92 14.9212 13.4775C14.6887 13.1569 14.2931 13.035 14.0531 12.99C14.1503 12.856 14.2782 12.7473 14.4262 12.6731C14.8612 12.4556 15.645 12.4237 16.4231 12.4237H16.8563C17.7 12.435 17.9175 12.4894 18.2231 12.5662C18.8419 12.7144 18.855 13.1137 18.8006 14.4806C18.7838 14.8687 18.7669 15.3075 18.7669 15.825C18.7669 15.9375 18.7612 16.0575 18.7612 16.185C18.7425 16.8806 18.72 17.67 19.2112 17.9944C19.2753 18.0346 19.3494 18.056 19.425 18.0562C19.5956 18.0562 20.1094 18.0562 21.5006 15.6694C21.9297 14.9011 22.3025 14.1028 22.6162 13.2806C22.6444 13.2319 22.7269 13.0819 22.8244 13.0237C22.8963 12.9871 22.9761 12.9684 23.0569 12.9694H26.3962C26.76 12.9694 27.0094 13.0237 27.0562 13.1644C27.1387 13.3875 27.0412 14.0681 25.5169 16.1325L24.8362 17.0306C23.4544 18.8419 23.4544 18.9338 24.9225 20.3081Z" />
                    </svg>
                  </a>
                </li>

                <li className={styles.item}>
                  <a
                    href="#"
                    className={styles.sn}
                    aria-label="канал в telegram"
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M36 18C36 22.7739 34.1036 27.3523 30.7279 30.7279C27.3523 34.1036 22.7739 36 18 36C13.2261 36 8.64773 34.1036 5.27208 30.7279C1.89642 27.3523 0 22.7739 0 18C0 13.2261 1.89642 8.64773 5.27208 5.27208C8.64773 1.89642 13.2261 0 18 0C22.7739 0 27.3523 1.89642 30.7279 5.27208C34.1036 8.64773 36 13.2261 36 18ZM18.6458 13.2885C16.8952 14.0175 13.3942 15.525 8.14725 17.811C7.29675 18.1485 6.849 18.4815 6.8085 18.8055C6.741 19.3522 7.42725 19.5683 8.361 19.863L8.75475 19.9868C9.67275 20.286 10.9102 20.6348 11.5515 20.6483C12.1365 20.6618 12.7867 20.4233 13.5045 19.9283C18.4072 16.6185 20.9385 14.9467 21.096 14.9107C21.2085 14.8837 21.366 14.8523 21.4695 14.9468C21.5752 15.039 21.564 15.2168 21.5528 15.264C21.4853 15.5542 18.792 18.0562 17.3993 19.3522C16.965 19.7572 16.6567 20.043 16.5938 20.1082C16.455 20.25 16.314 20.3895 16.1707 20.5268C15.3157 21.3503 14.6768 21.9668 16.2045 22.9748C16.9403 23.4608 17.5298 23.859 18.117 24.2595C18.756 24.696 19.395 25.1303 20.223 25.6748C20.4322 25.8098 20.6348 25.956 20.8305 26.0955C21.5753 26.6265 22.248 27.1035 23.0737 27.027C23.5553 26.982 24.0525 26.532 24.3045 25.182C24.9007 21.9938 26.073 15.0885 26.343 12.2423C26.3595 12.0056 26.3497 11.7679 26.3137 11.5335C26.2926 11.3443 26.201 11.17 26.0573 11.0452C25.8525 10.9039 25.6085 10.8307 25.3597 10.836C24.6847 10.8472 23.643 11.2095 18.6458 13.2885Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </address>

          <div className={styles.development}>
            <p>© YouMeal, {format(new Date(), "yyyy")}</p>
            <p>
              Design: <a href="#">Anastasia Ilina</a>
            </p>
            <p>
              Developer:
              <a href="https://t.me/Serg_svet">Serhii Svitlychnyi</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
