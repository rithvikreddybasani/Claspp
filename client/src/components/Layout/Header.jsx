import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import { Tangent } from 'lucide-react';
import { colors } from '../../theme/colors';

const Header = () => (
  <AppBar 
    position="sticky" 
    sx={{ 
      backgroundColor: colors.paper,
      borderBottom: `1px solid ${colors.border}`,
      boxShadow: 'none'
    }}
  >
    <Container maxWidth="xl">
      <Toolbar 
        sx={{ 
          minHeight: '64px',
          px: { xs: 2, sm: 3 },
          gap: 2
        }}
      >
        <Tangent
          sx={{ 
            fontSize: 28,
            color: colors.text.primary
          }} 
        />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: '20px',
              fontWeight: 600,
              color: colors.text.primary,
              letterSpacing: '-0.5px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Clasp
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              color: colors.text.secondary,
              backgroundColor: 'rgba(110, 118, 129, 0.1)',
              py: '2px',
              px: 1.5,
              borderRadius: '24px',
              border: `1px solid ${colors.border}`
            }}
          >
            rithvik_reddy
          </Typography>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;