import { Button, Space } from 'antd';
import React, { useEffect, useState, useLayoutEffect } from 'react';

function Home() {
  const [text, setText] = useState('text');

  console.log('render', text);

  useEffect(() => {
    console.log(`%ceffect: ${text}`, 'color: green');
    if (text === 'new text') {
      setText('another text1');
    }
  }, [text]);

  useLayoutEffect(() => {
    console.log(`%clayout effect: ${text}`, 'color: red ');
    if (text === 'another text1') {
      setText('another text2');
    }
  }, [text]);

  return (
    <div>
      <Space>
        Home -- {text}
        <Button onClick={() => setText('new text')}>change text</Button>
      </Space>
    </div>
  );
}

export default Home;
