import React from 'react';
import styles from './Pause.module.css';

const Pause = (props) => {
  return (
    <img className={styles.pause} src={props.src} onClick={props.onClick} alt="pause"/>
  );
};

export default Pause;
