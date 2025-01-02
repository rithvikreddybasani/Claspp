import React from 'react';
import { List, Typography, Box } from '@mui/material';
import FileListItem from './FileListItem.jsx';
import { colors } from '../theme/colors.js';

const FileList = ({ title, files }) => (
  <Box>
    <Typography
      variant="h6"
      sx={{
        fontSize: '16px',
        fontWeight: 600,
        color: colors.text.primary,
        mb: 2
      }}
    >
      {title}
    </Typography>
    <List sx={{ p: 0 }}>
      {files.map((file, index) => (
        <FileListItem
          key={index}
          filename={file.filename}
          content={file.content}
        />
      ))}
    </List>
  </Box>
);
export default FileList