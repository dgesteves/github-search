import { createBrowserRouter } from 'react-router-dom';
import Repos from '../pages/Repos';
import RootLayout from '../layouts/RootLayout';
import {
  FAVORITES_PATH,
  FINDER_PATH,
  REPOSITORIES_PATH,
  REPOSITORY_PATH,
} from '../constants/router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: FINDER_PATH,
        element: <h1>Home</h1>,
      },
      {
        path: REPOSITORIES_PATH,
        element: <Repos />,
        children: [
          {
            path: REPOSITORY_PATH,
            element: <h1>Repo details</h1>,
          },
        ],
      },
      {
        path: FAVORITES_PATH,
        element: <h1>Favorites</h1>,
      },
    ],
  },
]);
