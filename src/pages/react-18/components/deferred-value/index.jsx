import React, { useState, memo, useDeferredValue } from 'react';
import { Input } from 'antd';

const SlowList = memo(({ text }) => {
  // Log once. The actual slowdown is inside SlowItem.
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className='items'>{items}</ul>;
});

function SlowItem({ text }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className='item'>Text: {text}</li>;
}

function DeferredValue() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </div>
  );
}

export default DeferredValue;
