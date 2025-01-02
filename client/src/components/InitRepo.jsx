import React from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import GitButton from '../common/GitButton';

function InitRepo() {
  const handleInit = async () => {
    try {
      await axios.post("http://localhost:5000/init");
      alert("Repository Initialized!");
    } catch (error) {
      alert("Error initializing repository");
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <GitButton onClick={handleInit}>
        Initialize Repository
      </GitButton>
    </Box>
  );
}

export default InitRepo;