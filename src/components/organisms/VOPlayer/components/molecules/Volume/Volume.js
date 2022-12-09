import React from 'react';
import styles from './Volume.module.css';

const Volume = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        type='range'
        min='1'
        max='100'
        defaultValue='100'
        className={styles.slider}
        id='myRange'
        onChange={props.onChange}
        style={{
          background: `linear-gradient(90deg, var(--volumeUsed) ${
            props.value * 100
          }%, var(--volumeLeft) ${props.value * 100}%)`
        }}
      />
    </div>
  );
};

export default Volume;
