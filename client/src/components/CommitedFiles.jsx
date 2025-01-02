import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import FileList from '../FileList/FileList';
import ErrorMessage from '../common/ErrorMessage';

const CommitedFiles = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/commitedFiles');
        setFiles(response.data);
      } catch (error) {
        setError('Error fetching committed files.');
      }
    };

    fetchFiles();
  }, []);

  return (
    <Box>
      {error && <ErrorMessage message={error} />}
      <FileList title="Committed Files" files={files} />
    </Box>
  );
};

export default CommitedFiles;