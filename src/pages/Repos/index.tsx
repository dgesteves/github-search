import { useQuery } from '@apollo/client';
import { LIST_REPOSITORIES } from '../../services/api/testQuery';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Repos() {
  /* const { data } = useQuery(LIST_REPOSITORIES, {
    variables: {
      query: 'React',
      type: 'REPOSITORY',
      first: 10,
    },
  });
  console.log(data);*/
  return (
    <>
      <h1>Repos</h1>
    </>
  );
}
