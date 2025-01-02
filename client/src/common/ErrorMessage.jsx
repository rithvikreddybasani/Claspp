import React from 'react';
import { Alert } from '@mui/material';

const ErrorMessage = ({ message }) => (
  <Alert severity="error" sx={{ borderRadius: '6px' }}>
    {message}
  </Alert>
);

export default ErrorMessage;