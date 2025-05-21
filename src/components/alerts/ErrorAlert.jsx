import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ErrorAlert = ({ message }) => {
  return (
    <Stack sx={{ width: '100%', mt: 2, mb: 2 }}>
      <Alert severity="error">{message}</Alert>
    </Stack>
  );
};

ErrorAlert.propTypes  = {
  message: PropTypes.string.isRequired
};

export default ErrorAlert;
