import React from 'react';
import { TextField } from '@mui/material';
import { colors } from '../theme/colors';

const GitTextField = ({ multiline, rows, ...props }) => (
  <TextField
    variant="outlined"
    fullWidth
    multiline={multiline}
    rows={rows}
    sx={{
      '& .MuiOutlinedInput-root': {
        backgroundColor: colors.paper,
        color: colors.text.primary,
        fontSize: '14px',
        '& fieldset': {
          borderColor: colors.border,
        },
        '&:hover fieldset': {
          borderColor: colors.hover,
        },
        '&.Mui-focused fieldset': {
          borderColor: colors.hover,
        }
      },
      '& .MuiInputLabel-root': {
        color: colors.text.secondary,
        '&.Mui-focused': {
          color: colors.hover,
        }
      },
      ...props.sx
    }}
    {...props}
  />
);

export default GitTextField;