import PropTypes from 'prop-types';

const ErrorPropType = PropTypes.shape({
  message: PropTypes.string,
  status: PropTypes.number,
  statusText: PropTypes.string,
  data: PropTypes.instanceOf(Date)
});

export default ErrorPropType;