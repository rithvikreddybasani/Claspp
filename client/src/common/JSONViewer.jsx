import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../theme/colors';
import { formatJSON,getJSONSyntaxHighlighting } from '../utils/jsonFormatter'

const JSONViewer = ({ data }) => {
  const formattedData = formatJSON(data);
  
  const syntaxHighlight = (json) => {
    if (typeof json !== 'string') return json;
    
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, 
      (match) => {
        let cls = 'json-number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'json-key';
          } else {
            cls = 'json-string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'json-boolean';
        } else if (/null/.test(match)) {
          cls = 'json-null';
        }
        return `<span class="${cls}">${match}</span>`;
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.paper,
        padding: 2,
        borderRadius: '6px',
        border: `1px solid ${colors.border}`,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
        fontSize: '12px',
        lineHeight: '20px',
        overflowX: 'auto',
        ...getJSONSyntaxHighlighting()
      }}
    >
      <pre
        style={{ margin: 0 }}
        dangerouslySetInnerHTML={{
          __html: syntaxHighlight(formattedData)
        }}
      />
    </Box>
  );
};

export default JSONViewer;