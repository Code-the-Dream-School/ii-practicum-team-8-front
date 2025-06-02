import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DestinationIcon from '@mui/icons-material/Public';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TotalNumberOfTravelersIcon from '@mui/icons-material/Diversity3';
import BudgetIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../context/AuthContext';
import TravelPlanPropType from '../../propTypes/TravelPlanPropType';

const TravelPlanCard = ({ plan, deleteTravelPlanData }) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const handleOnDelete = (e) => {
     deleteTravelPlanData(plan?._id, token);
  };

  const handleOnView = () => {
    navigate(`${plan?._id}`);
  };

  const handleOnEdit = () => {
     navigate(`update/${plan?._id}`);
  };

  return (
    <Card sx={{ maxWidth: 400, borderRadius: 4, boxShadow: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="flex-end">
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={handleOnDelete}
            aria-label="delete"
          >
            <DeleteIcon />
          </Button>
        </Box>

        <Typography variant="h6" color="primary.main">
          <DestinationIcon /> {plan?.destination}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <DateRangeIcon />
         {dayjs(plan?.startDate).format('MM/DD/YYYY')} -{' '}
         {dayjs(plan?.endDate).format("MM/DD/YYYY")}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <TotalNumberOfTravelersIcon /> Total Travelers:{' '}
          {plan?.aiGenTravelPlan?.TotalNumberOfTravelers}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <BudgetIcon /> Budget: {plan?.budget}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle2">Interests:</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
          {plan?.interests?.map((interest, index) => (
            <Chip key={index} label={interest} variant="outlined"/>
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" variant="outlined" onClick={handleOnEdit}>
          Edit
        </Button>
        <Button size="small" variant="contained" onClick={handleOnView}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

TravelPlanCard.propTypes  = {
  plan: TravelPlanPropType.isRequired,
  deleteTravelPlanData: PropTypes.func
};

export default TravelPlanCard;
