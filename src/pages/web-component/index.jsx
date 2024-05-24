import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Space } from 'antd';

// random paragraph
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquet nunc, eget aliquam ni';

function WebComponentDemo() {
  const [visible, setVisible] = useState(0);
  const [count, setCount] = useState(0);
  const dialogRef = useRef();

  useEffect(() => {
    const target = dialogRef.current;
    const onOk = () => {
      console.log('ok');
      setVisible(false);
    };
    const onCancel = () => {
      console.log('cancel');
      setVisible(false);
    };
    target.addEventListener('onOk', onOk);
    target.addEventListener('onCancel', onCancel);

    return () => {
      target.removeEventListener('onOk', onOk);
      target.removeEventListener('onCancel', onCancel);
    };
  }, [dialogRef]);

  return (
    <div>
      <Space>
        <Button onClick={() => setVisible(true)}>Show Dialog</Button>
        <Button onClick={() => setVisible(false)}>Hide Dialog</Button>
        <Button onClick={() => setCount((c) => c + 1)}>Count++</Button>
      </Space>
      <my-dialog ref={dialogRef} id='my-dialog' title='title' visible={visible}>
        {content}
      </my-dialog>
      <div>{count}</div>
    </div>
  );
}

export default WebComponentDemo;
