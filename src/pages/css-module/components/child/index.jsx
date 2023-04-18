import React from 'react';
import styles from './index.module.css';

function Child() {
  return <div className={`${styles.child} item`}>child</div>;
}

export default Child;
