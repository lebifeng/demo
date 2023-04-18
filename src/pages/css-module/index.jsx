import React from 'react';
import Child from './components/child';
import styles from './index.module.css';

function CssModule() {
  return (
    <div className={styles.main}>
      <Child />
    </div>
  );
}

export default CssModule;
