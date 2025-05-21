import PropTypes from 'prop-types';
import StyledHeader from './Header.styles';

const MonthHeader = ({ label }) => {
  return <StyledHeader>{label}</StyledHeader>;
};

MonthHeader.propTypes  = {
  label: PropTypes.string
};

export default MonthHeader;
