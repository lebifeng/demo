import React, { useState } from 'react';
import { Button } from 'antd';

// random paragraph
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquet nunc, eget aliquam ni';

function WebComponentDemo() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>Show Dialog</Button>
      <Button onClick={() => setVisible(false)}>Hide Dialog</Button>
      <my-dialog
        title='title'
        visible={visible}
        onOk={() => {
          alert('ok');
          setVisible(false);
        }}
        onCancel={() => {
          alert('cancel');
          setVisible(false);
        }}
      >
        <p slot='main'>{content}</p>
      </my-dialog>
    </div>
  );
}

export default WebComponentDemo;
