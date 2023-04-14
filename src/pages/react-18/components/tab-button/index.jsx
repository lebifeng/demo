import { Button } from 'antd';
import React, { useTransition } from 'react';

function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type={isActive ? 'primary' : 'default'}
      loading={isPending}
      onClick={() => {
        if (isActive) return;
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </Button>
  );
}

export default TabButton;
