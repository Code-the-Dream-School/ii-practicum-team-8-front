import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessAlert = ({ message }) => {
  return (
    <Stack sx={{ width: '100%', mt: 2, mb: 2 }}>
      <Alert severity="success">{message}</Alert>
    </Stack>
  );
};

export default SuccessAlert;
