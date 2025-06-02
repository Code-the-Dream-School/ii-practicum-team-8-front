import PropTypes from 'prop-types';
import Loader from './Loader';
import ErrorAlert from '../alerts/ErrorAlert';
import ErrorLoadingPropType from '../../propTypes/ErrorLoadingPropType';

const LoadingWrapper = ({ isLoading, isError, error, children }) => {
  if (isLoading) return <Loader />;
  if (isError)
    return <ErrorAlert message={`${error?.data?.msg || error?.message || error}`} />;

  return children;
};

LoadingWrapper.propTypes  = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  error: ErrorLoadingPropType,
  children: PropTypes.node
};

export default LoadingWrapper;