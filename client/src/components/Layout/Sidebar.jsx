import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { GitBranch, FilePlus, GitCommit, History, GitCompare, Files, Archive } from 'lucide-react';

const menuItems = [
  { text: 'Repository', icon: <GitBranch size={20} /> },
  { text: 'Add Files', icon: <FilePlus size={20} /> },
  { text: 'Commit', icon: <GitCommit size={20} /> },
  { text: 'History', icon: <History size={20} /> },
  { text: 'Changes', icon: <GitCompare size={20} /> },
  { text: 'Added Files', icon: <Files size={20} /> },
  { text: 'Committed Files', icon: <Archive size={20} /> },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'background.paper',
        pt: 8, // Add padding top to account for header
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            sx={{
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'text.secondary', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text}
              sx={{ 
                '& .MuiListItemText-primary': { 
                  fontSize: '0.9rem',
                  fontWeight: 500 
                } 
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;