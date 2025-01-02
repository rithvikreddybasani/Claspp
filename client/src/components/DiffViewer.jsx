import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../theme/colors';

const DiffViewer = ({ diff }) => {
  if (!diff) return null;

  // Convert diff to string if it's an object
  const displayDiff = typeof diff === 'object' ? JSON.stringify(diff, null, 2) : diff;

  let isRed = false;
  let isGreen = false;

  // Apply colors to entire sections based on ++ (green) and -- (red)
  const coloredDiff = displayDiff.split(/(\+\+|--)/g).map((part, index) => {
    if (part === '++') {
      isGreen = true;
      isRed = false;
      return (
        <Typography
          key={index}
          component="span"
          sx={{ color: 'green', fontWeight: 'bold' }}
        >
          {part}
        </Typography>
      );
    } else if (part === '--') {
      isRed = true;
      isGreen = false;
      return (
        <Typography
          key={index}
          component="span"
          sx={{ color: 'red', fontWeight: 'bold' }}
        >
          {part}
        </Typography>
      );
    }

    const color = isRed ? 'red' : isGreen ? 'green' : 'inherit';
    return (
      <Typography
        key={index}
        component="span"
        sx={{ color: color }}
      >
        {part}
      </Typography>
    );
  });

  return (
    <Box 
      sx={{
        backgroundColor: colors.paper,
        padding: 2,
        borderRadius: '6px',
        border: `1px solid ${colors.border}`,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
        fontSize: '12px',
        lineHeight: '20px',
        overflowX: 'auto'
      }}
    >
      <Typography 
        component="pre" 
        sx={{ 
          color: colors.text.primary,
          margin: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}
      >
        {coloredDiff}
      </Typography>
    </Box>
  );
}

export default DiffViewer;
