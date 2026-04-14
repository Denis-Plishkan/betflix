import Layout from '@/components/Layout';
import ActorDetail from '@/components/pages/ActorDetail';
import MovieDetail from '@/components/pages/MovieDetail';
import Movies from '@/components/pages/Movies';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies />,
        },
        {
          path: '/movie/:id',
          element: <MovieDetail />,
        },
        {
          path: '/actor/:id',
          element: <ActorDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
