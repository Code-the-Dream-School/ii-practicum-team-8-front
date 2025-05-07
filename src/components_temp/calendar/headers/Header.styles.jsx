import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledHeader = styled(Typography)(({ theme }) => ({
  ...theme.typography.button,
  color: (theme.vars || theme).palette.primary.main,
  padding: theme.spacing(1),
  fontWeight: '600',
}));

export default StyledHeader;