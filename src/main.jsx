import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NouClient, { action as nouClientAction } from './pages/NouClient';
import Index, { loader as clientsLoader } from './pages/Index';
import EditarClient, {
  loader as editarClientLoader,
  action as editarClientAction,
} from './pages/EditarClient';
import { action as eliminarClientAction } from './components/Client';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/nou',
        element: <NouClient />,
        action: nouClientAction,
      },
      {
        path: '/clients/:clientID/editar',
        element: <EditarClient />,
        loader: editarClientLoader,
        action: editarClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clients/:clientID/eliminar',
        action: eliminarClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

export default main;
