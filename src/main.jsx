import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/404/index';
import Layout from '@/components/layout/index';
import routers from '@/config/router';
import '@/web-components/index';
import virtualRouters from 'virtual:routes';

import './index.module.css';

console.log('routers1', virtualRouters);

const menus = routers.map((e) => ({ key: e.path, label: e.label }));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout menus={menus} />,
      errorElement: <NotFound />,
      children: [
        {
          errorElement: <NotFound />,
          children: routers,
        },
      ],
    },
  ],
  {
    basename: '/app',
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={() => <div>loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
