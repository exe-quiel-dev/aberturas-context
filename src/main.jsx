import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


import Layout from './components/Layout';

import Index from './pages';
import Nosotros from './pages/nosotros';
import Puertas from './pages/puertas';
import Chapasimple from './pages/chapasimple';
import Ventanas from './pages/ventanas';
import ChapaDoble from './pages/chapaDoble';
import Seguridad from './pages/seguridad';
import Aluminio from './pages/aluminio';
import Plegadizas from './pages/plegadizas';
import Acrilicos from './pages/acrilicos';

import { ProductoProvider } from './context/ProductoProvider';
import Pvc from './pages/pvc';

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
        path: '/doblechapa',
        element: <ChapaDoble />
      },
      {
        path: '/placa',
        element: <Chapasimple />
      },
      {
        path: '/seguridad',
        element: <Seguridad />
      },
      {
        path: '/aluminio',
        element: <Aluminio />
      },
      {
        path: '/plegadizas',
        element: <Plegadizas />
      },
      {
        path: '/ventanas',
        element: <Ventanas />
      },
      {
        path: '/pvc',
        element: <Pvc />
      },
      {
        path: '/acrilicos',
        element: <Acrilicos />
      }
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
