import React from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

function MainContent({ children }) {
  return (
    // <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    //   <Header />
    //   {/* Add toolbar spacer to offset fixed header height */}
    //   <Toolbar />
    
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
          px: { xs: 2, md: 4 },
          mt: { xs: 0, md: 2 },
          mb: '64px', // Reserve space for footer height
        }}
      >
        {children}
      </Container>

    //   <Footer />
    //  <Box sx={{ height: "200vh" }} /> 
    // </Box>
  );
}

export default MainContent;
