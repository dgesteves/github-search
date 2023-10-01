import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  FAVORITES_PATH,
  FINDER_PATH,
  REPOSITORIES_PATH,
} from '../../constants/router';
import { FAVORITES, REPOSITORIES } from '../../constants/navigation';

export const useNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [
    { name: REPOSITORIES, path: REPOSITORIES_PATH },
    { name: FAVORITES, path: FAVORITES_PATH },
  ];

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(FINDER_PATH);
    }
  }, [location.pathname, navigate]);

  return {
    location,
    tabs,
  };
};
