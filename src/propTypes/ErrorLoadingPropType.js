import PropTypes from 'prop-types';
import ErrorPropType from './ErrorPropType';

const errorLoadingPropType = PropTypes.oneOfType([
  ErrorPropType,
  PropTypes.string,
]);

export default errorLoadingPropType;