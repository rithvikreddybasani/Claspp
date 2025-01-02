import React from 'react';
import { ListItem, ListItemText, Box } from '@mui/material';
import { colors } from '../theme/colors';
import JSONViewer from '../common/JSONViewer';

const FileListItem = ({ filename, content }) => (
  <ListItem
    sx={{
      backgroundColor: colors.paper,
      borderRadius: '6px',
      border: `1px solid ${colors.border}`,
      mb: 1
    }}
  >
    <ListItemText
      primary={filename}
      secondary={
        <Box sx={{ mt: 1 }}>
          <JSONViewer data={content} />
        </Box>
      }
      primaryTypographyProps={{
        sx: { 
          color: colors.text.primary,
          fontWeight: 600
        }
      }}
    />
  </ListItem>
);

export default FileListItem