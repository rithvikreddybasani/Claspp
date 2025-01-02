import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import GitButton from '../common/GitButton';
import GitTextField from '../common/GitTextField';
import DiffViewer from './DiffViewer';
import ErrorMessage from '../common/ErrorMessage';

function ShowDiff() {
  const [hash, setHash] = useState("");
  const [diff, setDiff] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDiff = async () => {
    if (!hash) {
      setError("Hash is required.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/show/${hash}`);
      setDiff(response.data);
    } catch (err) {
      setError("Error fetching diff.");
      setDiff("");
    }
    setLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <GitTextField
        label="Commit Hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        placeholder="Enter commit hash"
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <GitButton onClick={fetchDiff} disabled={loading}>
          {loading ? "Loading..." : "Show Differences"}
        </GitButton>
      </Box>

      {error && <ErrorMessage message={error} />}
      <DiffViewer diff={diff} />
    </Box>
  );
}

export default ShowDiff;