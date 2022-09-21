import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import config from './app/common/config';

import ComponentsIndex from './app/pages/components/index';
import Components from './app/pages/components/components';

import ErrorPage from './app/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/components'),
    errorElement: <ErrorPage/>
  },
  {
    path: '/components',
    element: <Components/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <ComponentsIndex/>
      },
      ...config.subNaviagation.map(({ path, element }) => ({
        path,
        element
      }))
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
