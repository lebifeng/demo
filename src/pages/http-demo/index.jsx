import React from 'react';
import { Button } from 'antd';
import { getUserList } from '@/service/user';
import classes from './index.module.css';

function HttpDemo() {
  const onGetJson = async () => {
    const headers = new Headers();
    headers.append('csrf-token', 'vvv');
    const userList = await getUserList({
      headers,
      credentials: 'include',
    });
    console.log('json', userList);
  };

  return (
    <div className={classes.main}>
      <Button onClick={onGetJson}>HttpRequest</Button>
    </div>
  );
}

export default HttpDemo;
