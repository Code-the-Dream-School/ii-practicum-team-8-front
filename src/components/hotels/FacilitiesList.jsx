import { useHotelFacilitiesQuery } from '../../hooks/useHotelFacilitiesQuery';

import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const FacilitiesList = ({ hotelId }) => {
  
  const { data: hotelFacilities } = useHotelFacilitiesQuery(hotelId);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {hotelFacilities?.map((facility) => {
        const name = facility?.facility_name;
        const key = facility?.hotelfacilitytype_id;
        const icon = (
          <CheckCircleOutlineIcon
            sx={{
              color: 'success.main',
              '&.MuiChip-icon': {
                color: 'success.main',
              },
            }}
          />
        );

        return (
          <ListItem key={key}>
            <Chip icon={icon} label={name} color="primary" variant="outlined" />
          </ListItem>
        );
      })}
    </Box>
  );
};

export default FacilitiesList;
