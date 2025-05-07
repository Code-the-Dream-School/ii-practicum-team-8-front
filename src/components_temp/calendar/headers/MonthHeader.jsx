import StyledHeader from './Header.styles';

const MonthHeader = (props) => {
  return (
    <StyledHeader>{props?.label}</StyledHeader>
  );
};

export default MonthHeader;
