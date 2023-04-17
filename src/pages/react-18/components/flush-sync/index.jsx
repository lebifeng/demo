import React, { useRef, useState } from 'react';
import { Button, Divider, Space, message } from 'antd';
import { flushSync } from 'react-dom';

function FlushSync() {
  const [height, setHeight] = useState(100);
  const ref = useRef(null);

  const addHeightWithFlushSync = () => {
    flushSync(() => {
      setHeight(height + 100);
    });
    message.info(`当前获取的高度为：${ref.current.clientHeight}`);
  };

  const addHeightWithoutFlushSync = () => {
    setHeight(height + 100);
    message.info(`当前获取的高度为：${ref.current.clientHeight}`);
  };

  return (
    <div>
      <div
        ref={ref}
        style={{
          height: `${height}px`,
          backgroundColor: 'lightblue',
          padding: '12px',
        }}
      >
        current height is {height}px
      </div>
      <Divider />
      <Space>
        <Button onClick={addHeightWithFlushSync}>
          increase 100px height with flush sync
        </Button>
        <Button onClick={addHeightWithoutFlushSync}>
          increase 100px height without flush sync
        </Button>
      </Space>
    </div>
  );
}

export default FlushSync;
