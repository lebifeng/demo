import React from 'react';
import { Button } from 'antd';
import { requestGet } from '@/service/request';
import classes from './index.module.css';

function HttpDemo() {
  const onGetJson = async () => {
    const headers = new Headers();
    headers.append('test-token', 'vvv');
    const json = await requestGet('http://localhost:8080/user/list', {
      headers,
    });
    console.log('fetchJson', json);
  };

  return (
    <div className={classes.main}>
      <Button onClick={onGetJson}>HttpRequest</Button>
    </div>
  );
}

export default HttpDemo;
