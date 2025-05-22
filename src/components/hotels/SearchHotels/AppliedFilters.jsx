import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchTermPropType from '../../../propTypes/SearchTermPropType';

const AppliedFilters = ({ searchTerm }) => {

  const city = searchTerm?.location?.city;
  const checkIn = searchTerm?.checkIn;
  const checkOut = searchTerm?.checkOut;
  const adults = searchTerm?.travelerInfo?.adults;
  const kids = searchTerm?.travelerInfo?.kids;
  const kidsAge = searchTerm?.travelerInfo?.kidsAge;
  const rooms = searchTerm?.travelerInfo?.rooms;

  const kidsAgeStr = kidsAge && kidsAge.length > 0 ? `Age(s): ${kidsAge?.join(', ')};`: '';
  const travelInfoStr = `Adults: ${adults}; Kids: ${kids}; ${kidsAgeStr} Rooms: ${rooms}`;

  return (
    <Alert
      severity='info'
      variant='outlined'
    >
      <AlertTitle sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
        Applied Filters:
      </AlertTitle>
      <Box display='flex' flexWrap='wrap' gap={2}>
        <Typography>Location: {city}</Typography>
        <Typography>Check-in: {dayjs(checkIn).format('MM/DD/YYYY')}</Typography>
        <Typography>Check-out: {dayjs(checkOut).format('MM/DD/YYYY')}</Typography>
        <Typography>Traveler info: {travelInfoStr}</Typography>
      </Box>
    </Alert>
  );
};

AppliedFilters.propTypes  = {
  searchTerm: SearchTermPropType.isRequired
};

export default AppliedFilters;