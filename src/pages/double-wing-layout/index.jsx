import React from 'react';
import cx from 'classnames';
import classes from './index.module.css';

function DoubleWingLayout() {
  return (
    <div className={classes.container}>
      <div className={cx(classes.content, classes.item)}>content</div>
      <div className={cx(classes.left, classes.item)}>left</div>
      <div className={cx(classes.right, classes.item)}>right</div>
    </div>
  );
}

export default DoubleWingLayout;
