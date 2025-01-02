import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { colors } from '../../theme/colors';

const Section = ({ title, children }) => (
  <Paper
    sx={{
      backgroundColor: colors.paper,
      border: `1px solid ${colors.border}`,
      borderRadius: '6px',
      mb: 2,
      overflow: 'hidden',
      transition: 'border-color 0.2s ease',
      '&:hover': {
        borderColor: '#30363d'
      }
    }}
  >
    {title && (
      <Box
        sx={{
          borderBottom: `1px solid ${colors.border}`,
          p: 2,
          backgroundColor: 'rgba(22, 27, 34, 0.7)'
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '1rem',
            fontWeight: 600,
            color: '#58a6ff',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          {title}
        </Typography>
      </Box>
    )}
    <Box sx={{ p: 2 }}>
      {children}
    </Box>
  </Paper>
);

export default Section;