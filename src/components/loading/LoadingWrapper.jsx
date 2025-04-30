import Loader from '../loading/Loader';
import ErrorAlert from '../error/ErrorAlert';

const LoadingWrapper = ({isLoading, isError, error, children}) => {

  if (isLoading) return <Loader />;
  if (isError) return (<ErrorAlert message={`${error?.message} ${error?.statusText}` }/>);

  return children;
};

export default LoadingWrapper;
