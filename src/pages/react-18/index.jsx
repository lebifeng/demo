import React, { useState } from 'react';
import { Divider, Space } from 'antd';
import About from './components/about';
import Posts from './components/posts';
import Home from './components/home';
import TabButton from './components/tab-button';

function App() {
  const [tabKey, setTabKey] = useState('about');

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
      </Space>
      <Divider />
      <div>
        {tabKey === 'about' && <About />}
        {tabKey === 'posts' && <Posts />}
        {tabKey === 'home' && <Home />}
      </div>
    </div>
  );
}

export default App;
