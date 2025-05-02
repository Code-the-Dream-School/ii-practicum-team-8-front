import StyledHeader from './Header.styles';

const WeekHeader = (props) => {
    return <StyledHeader>{props?.label}</StyledHeader>;
}

export default WeekHeader;