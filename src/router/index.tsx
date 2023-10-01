import { createBrowserRouter } from 'react-router-dom';
import {
  FAVORITES_PATH,
  FINDER_PATH,
  REPOSITORIES_PATH,
} from '../constants/router';
import Repositories from '../pages/Repositories';
import RootLayout from '../layouts/RootLayout';
import Error from '../pages/Error';
import Finder from '../pages/Finder';
import Favorites from '../pages/Favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: FINDER_PATH,
        element: <Finder />,
      },
      {
        path: REPOSITORIES_PATH,
        element: <Repositories />,
      },
      {
        path: FAVORITES_PATH,
        element: <Favorites />,
      },
    ],
  },
]);
