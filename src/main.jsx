import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/404';
import Layout from '@/components/Layout';
import routers from '@/config/router';

import './index.module.css';

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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
