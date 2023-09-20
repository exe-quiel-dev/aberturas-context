import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


import Layout from './components/Layout';

import Index from './pages/Index';
import Nosotros from './pages/Nosotros';
import Puertas from './pages/Puertas';
import Chapasimple from './pages/Chapasimple';

import { ProductoProvider } from './context/ProductoProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/nosotros',
        element: <Nosotros />
      },
      {
        path: '/puertas',
        element: <Puertas />
      },
      {
        path: '/chapasimple',
        element: <Chapasimple />
      },
      {
        path: '/ventanas',
        element: <h1>Ventanas</h1>
      },
      {
        path: '/pvc',
        element: <h1>PVC</h1>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductoProvider>
      <RouterProvider router={router} />
    </ProductoProvider>
  </React.StrictMode>
)
