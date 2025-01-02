import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import Header from './components/Layout/Header';
import Section from './components/Layout/Section';
import InitRepo from "./components/InitRepo";
import AddFile from "./components/AddFile";
import CommitChanges from "./components/CommitChanges";
import Logs from "./components/Logs";
import ShowDiff from "./components/ShowDiff";
import CommitedFiles from "./components/CommitedFiles";
import AddedFiles from "./components/AddedFiles";
import { colors } from './theme/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.background,
      paper: colors.paper
    },
    primary: {
      main: colors.primary
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary
    }
  },
  typography: {
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#58a6ff', // GitHub-style blue for headings
      letterSpacing: '0.02em'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '6px'
        },
        contained: {
          backgroundColor: colors.primary,
          '&:hover': {
            backgroundColor: '#2ea043'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          '&:hover': {
            borderColor: '#30363d'
          }
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: colors.background }}>
        <Header />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Section title="Repository Initialization">
              <InitRepo />
            </Section>

            <Section title="File Management">
              <AddFile />
            </Section>

            <Section title="Commit Changes">
              <CommitChanges />
            </Section>

            <Section title="History">
              <Logs />
            </Section>

            <Section title="Changes">
              <ShowDiff />
            </Section>

            <Section title="Added Files">
              <AddedFiles />
            </Section>

            <Section title="Committed Files">
              <CommitedFiles />
            </Section>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;