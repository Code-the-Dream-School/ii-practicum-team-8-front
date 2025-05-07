import Loader from './Loader';
import ErrorAlert from '../alerts/ErrorAlert';

const LoadingWrapper = ({ isLoading, isError, error, children }) => {
  if (isLoading) return <Loader />;
  if (isError)
    return <ErrorAlert message={`${error?.data?.msg||error?.message}`} />;

  return children;
};

export default LoadingWrapper;
