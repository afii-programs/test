import React from 'react';
import { Box, Typography, Link, Grid, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3, // Padding top and bottom
        px: 2, // Padding left and right
        mt: 'auto', // Push footer to bottom if content is short
        mb: 4, // Increased margin bottom
      }}
    >
      <Container maxWidth="lg"> {/* Constrains width like Figma */}
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Typography variant="fbody" color="#A0AEC0" align="left">
              {'© '}
              {new Date().getFullYear()}
              {', Made with Lorem for a better web'}
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end', color: '#A0AEC0' } }}>
          
              <Link href="#" variant="fbody" sx={{ mx: 2.5 }} color="#A0AEC0">
                About Us
              </Link>
              <Link href="#" variant="fbody" sx={{ mx: 2.5 }} color="#A0AEC0">
                Privacy
              </Link>
              <Link href="#" variant="fbody" sx={{ mx: 2.5 }} color="#A0AEC0">
                Blog
              </Link>
              {/* Adjusted ml for consistency */}
              <Link href="#" variant="fbody" sx={{ ml: 2.5 }} color="#A0AEC0">
                License
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;