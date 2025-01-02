import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import FileList from '../FileList/FileList';
import ErrorMessage from '../common/ErrorMessage';

const AddedFiles = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('https://claspp.onrender.com/addedFiles');
        setFiles(response.data);
      } catch (error) {
        setError('Error fetching added files.');
      }
    };

    fetchFiles();
  }, [1]);

  return (
    <Box>
      {error && <ErrorMessage message={error} />}
      <FileList title="Added Files" files={files} />
    </Box>
  );
};

export default AddedFiles;
