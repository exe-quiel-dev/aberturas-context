import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


import Layout from './components/Layout';

import Index from './pages/Index';
import Nosotros from './pages/Nosotros';
import Puertas from './pages/Puertas';
import Chapasimple from './pages/Chapasimple';
import Ventanas from './pages/Ventanas';
import ChapaDoble from './pages/ChapaDoble';
import Seguridad from './pages/Seguridad';
import Aluminio from './pages/Aluminio';
import Plegadizas from './pages/Plegadizas';
import Acrilicos from './pages/Acrilicos';

import { ProductoProvider } from './context/ProductoProvider';
import Pvc from './pages/Pvc';

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
        path: '/Nosotros',
        element: <Nosotros />
      },
      {
        path: '/Puertas',
        element: <Puertas />
      },
      {
        path: '/Chapasimple',
        element: <Chapasimple />
      },
      {
        path: '/Doblechapa',
        element: <ChapaDoble />
      },
      {
        path: '/Placa',
        element: <Chapasimple />
      },
      {
        path: '/Seguridad',
        element: <Seguridad />
      },
      {
        path: '/Aluminio',
        element: <Aluminio />
      },
      {
        path: '/Plegadizas',
        element: <Plegadizas />
      },
      {
        path: '/Ventanas',
        element: <Ventanas />
      },
      {
        path: '/Pvc',
        element: <Pvc />
      },
      {
        path: '/Acrilicos',
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
