import Typography from '@mui/material/Typography';

import Loader from '../loading/Loader';

const LoadingWrapper = ({isLoading, isError, error, children}) => {

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <Typography color="error">
        Error loading photos: {error?.message}
      </Typography>
    );

  return children;
};

export default LoadingWrapper;
