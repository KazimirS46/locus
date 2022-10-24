import React from 'react';
import styles from './button.module.css';

function Button(props) {
  return (
    <a className={styles.button} href="#!">
      {props.title}
    </a>
  );
}

export default Button;
