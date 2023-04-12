import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

// random paragraph
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquet nunc, eget aliquam ni';

function WebComponentDemo() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById('my-dialog');
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
  }, []);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>Show Dialog</Button>
      <Button onClick={() => setVisible(false)}>Hide Dialog</Button>
      <my-dialog id='my-dialog' title='title' visible={visible}>
        {content}
      </my-dialog>
    </div>
  );
}

export default WebComponentDemo;
