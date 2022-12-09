import React from 'react';
import styles from './ButtonBox.module.css';

const ButtonsBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ButtonsBox;