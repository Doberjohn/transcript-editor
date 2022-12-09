import React from 'react';
import styles from './Play.module.css';

const Play = (props) => {
  return <img className={styles.play} src={props.src} onClick={props.onClick} alt="play"/>;
};

export default Play;
