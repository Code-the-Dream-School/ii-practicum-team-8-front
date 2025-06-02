import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const InfoAlert = ({ message }) => {
  return (
    <Stack sx={{ width: '100%', mb: 2 }}>
      <Alert severity="info">{message}</Alert>
    </Stack>
  );
};

InfoAlert.propTypes  = {
  message: PropTypes.string.isRequired
};

export default InfoAlert;
