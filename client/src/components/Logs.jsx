import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import GitButton from '../common/GitButton';
import LogViewer from './LogViewer';
import ErrorMessage from '../common/ErrorMessage';

function Logs() {
  const [logs, setLogs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5000/log");
      setLogs(response.data);
    } catch (error) {
      setError("Error fetching logs.");
    }
    setLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <GitButton onClick={fetchLogs} disabled={loading}>
          {loading ? "Loading..." : "Show Logs"}
        </GitButton>
      </Box>

      {error && <ErrorMessage message={error} />}
      <LogViewer logs={logs} />
    </Box>
  );
}

export default Logs;