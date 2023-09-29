import { createBrowserRouter, redirect } from 'react-router-dom';
import Repos from '../pages/Repos';

export const router = createBrowserRouter([
  {
    path: '/',
    element: null,
    loader: async () => redirect('/repos'),
    errorElement: <h1>404</h1>,
  },
  {
    path: '/Repos',
    element: <Repos />,
    children: [
      {
        path: '/Repos/:repoId',
        element: <h1>Welcome to nx-welcome!</h1>,
      },
      {
        path: '/Repos/favorites',
        element: <h1>Welcome to nx-welcome!</h1>,
      },
    ],
  },
]);
