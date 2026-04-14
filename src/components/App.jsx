import Layout from '@/components/Layout';
import ActorDetail from '@/components/pages/ActorDetail';
import MovieDetail from '@/components/pages/MovieDetail';
import Movies from '@/components/pages/Movies';
import MoviesListMain from '@/components/pages/MoviesListMain';
import MoviesListTop from '@/components/pages/MoviesListTop';
import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS } from '../constatnts';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies />,
        },
        ...TOP_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListTop />,
        })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain />,
        })),

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
