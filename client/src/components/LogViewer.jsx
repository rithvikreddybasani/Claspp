import React from 'react';
import JSONViewer from '../common/JSONViewer.jsx';

const LogViewer = ({ logs }) => {
  if (!logs) return null;
  return <JSONViewer data={logs} />;
};

export default LogViewer;