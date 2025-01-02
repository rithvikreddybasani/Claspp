import React from 'react';
import { Button } from '@mui/material';
import { colors } from '../theme/colors';

const GitButton = ({ children, onClick, fullWidth = false, variant = 'contained', ...props }) => (
  <Button
    variant={variant}
    onClick={onClick}
    fullWidth={fullWidth}
    sx={{
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '14px',
      padding: '6px 16px',
      borderRadius: '6px',
      minWidth: 'fit-content',
      backgroundColor: variant === 'contained' ? colors.primary : 'transparent',
      border: variant === 'outlined' ? `1px solid ${colors.border}` : 'none',
      color: variant === 'contained' ? '#ffffff' : colors.text.primary,
      '&:hover': {
        backgroundColor: variant === 'contained' ? '#2ea043' : colors.paper,
      },
      ...props.sx
    }}
    {...props}
  >
    {children}
  </Button>
);

export default GitButton;