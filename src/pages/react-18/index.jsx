import React, { useState } from 'react';
import { Divider, Space } from 'antd';
import About from './components/about';
import Posts from './components/posts';
import Home from './components/home';
import TabButton from './components/tab-button';
import DeferredValue from './components/deferred-value';

function App() {
  const [tabKey, setTabKey] = useState('home');

  const onTabChange = (key) => {
    if (tabKey === key) return;
    setTabKey(key);
  };

  return (
    <div>
      <Space>
        <TabButton
          isActive={tabKey === 'home'}
          onClick={() => onTabChange('home')}
        >
          home
        </TabButton>
        <TabButton
          isActive={tabKey === 'posts'}
          onClick={() => onTabChange('posts')}
        >
          posts
        </TabButton>
        <TabButton
          isActive={tabKey === 'about'}
          onClick={() => onTabChange('about')}
        >
          about
        </TabButton>
        <TabButton
          isActive={tabKey === 'deferredValue'}
          onClick={() => onTabChange('deferredValue')}
        >
          deferred value
        </TabButton>
      </Space>
      <Divider />
      <div>
        {tabKey === 'about' && <About />}
        {tabKey === 'posts' && <Posts />}
        {tabKey === 'home' && <Home />}
        {tabKey === 'deferredValue' && <DeferredValue />}
      </div>
    </div>
  );
}

export default App;
