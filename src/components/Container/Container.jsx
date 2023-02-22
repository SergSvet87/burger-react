import React from "react";
import classNames from 'classnames';

import styles from "./Container.module.css";

export const Container = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
