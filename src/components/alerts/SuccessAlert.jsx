import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';

const SuccessAlert = ({ message }) => {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Stack sx={{ width: '100%', mt: 2, mb: 2 }}>
        <Alert severity="success" onClose={() => setOpen(false)}>{message}</Alert>
      </Stack>
    </Collapse>
  );
};

export default SuccessAlert;
