import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledHotelCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('md')]: {
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
}));

export default StyledHotelCard;
