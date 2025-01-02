import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import GitButton from '../common/GitButton';
import GitTextField from '../common/GitTextField';

function CommitChanges() {
  const [message, setMessage] = useState("");

  const handleCommit = async () => {
    if (!message) {
      alert("Please provide a commit message.");
      return;
    }

    try {
      await axios.post("https://claspp.onrender.com/commit", { message });
      alert("Commit Successful!");
      setMessage("");
    } catch (error) {
      alert("Error committing changes.");
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <GitTextField
        label="Commit Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a commit message"
        multiline
        rows={2}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <GitButton onClick={handleCommit}>
          Commit Changes
        </GitButton>
      </Box>
    </Box>
  );
}

export default CommitChanges;
