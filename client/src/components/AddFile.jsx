import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import GitButton from '../common/GitButton';
import GitTextField from '../common/GitTextField';

function AddFile() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [showInputs, setShowInputs] = useState(false);

  const handleAdd = async () => {
    if (!fileName || !fileContent) {
      alert("Please provide both filename and content.");
      return;
    }

    try {
      await axios.post("https://claspp.onrender.com/add", {
        filename: fileName,
        content: fileContent
      });
      alert(`File "${fileName}" added successfully!`);
      setFileName("");
      setFileContent("");
      setShowInputs(false);
    } catch (error) {
      alert("Error adding file.");
    }
  };

  if (!showInputs) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <GitButton onClick={() => setShowInputs(true)}>
          Add File
        </GitButton>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <GitTextField
        label="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="Enter file name"
      />
      <GitTextField
        label="File Content"
        multiline
        rows={6}
        value={fileContent}
        onChange={(e) => setFileContent(e.target.value)}
        placeholder="Enter file content"
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <GitButton onClick={handleAdd}>
          Add File
        </GitButton>
      </Box>
    </Box>
  );
}

export default AddFile;
