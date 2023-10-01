import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import {
  API_ERROR,
  AUTH_ERROR,
  GENERIC_ERROR,
  NOT_FOUND_ERROR,
} from '../../constants/error';

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>{NOT_FOUND_ERROR}</div>;
    }

    if (error.status === 401) {
      return <div>{AUTH_ERROR}</div>;
    }

    if (error.status === 503) {
      return <div>{API_ERROR}</div>;
    }

    if (error.status === 418) {
      return (
        <span role="img" aria-label="teapot Emoji">
          🫖
        </span>
      );
    }
  }

  return <div>{GENERIC_ERROR}</div>;
}
