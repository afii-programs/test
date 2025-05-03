import React from 'react';
// Removed Paper, Divider
import { Box, Typography, TextField, Button, Switch, FormControlLabel, Grid, Container, Stack, IconButton, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

// Import SVG Assets
import ChakraLogo from '../assets/chakra.svg?url';
import Bg1Url from '../assets/bg 1.svg?url'; // Or Bg2Url if that's the one for the right side


const SignIn = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Use Header in dark mode */}

        <Header themeMode="dark" />


      {/* Main Content Area using Grid - Ensure it fills space */}
      <Grid container sx={{ mt: -12, width: '100%'}}> {/* Keep negative margin if needed for overlap */}

        {/* Left Side (Form Area) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 8, md: 15 },
            px: { xs: 4, md: 10 },
            width: '60vw', // Keep specific width if needed, or adjust layout
          }}
        >
          {/* Content Wrapper */}
          <Box sx={{ width: '40%', alignContent: 'center' }}> {/* Keep specific width if needed */}
            <Stack spacing={4}>
              {/* 1. Welcome Text */}
              <Box sx={{ mb: 3 }}>
                {/* Use theme color and typography */}
                <Typography variant="h4" component="h1" gutterBottom color="primary"> {/* Removed fontWeight="bold" */}
                  Welcome Back
                </Typography>
                {/* Use theme typography */}
                <Typography variant="body1" color="text.secondary">
                  Enter your email and password to sign in
                </Typography>
              </Box>

              {/* 2. Login Form */}
              <Stack component="form" spacing={2.5} noValidate autoComplete="off">

                 {/* Email Input - Label Below */}
                 <Box>
                    {/* Use theme typography */}
                    <Typography variant="caption" display="block" sx={{ mt: 0.5 }}> {/* Removed color='text.secondary' - handled by theme */}
                       Email
                    </Typography>
                    <TextField
                       id="email-signin"
                       variant="outlined"
                       fullWidth
                       placeholder="Your email address"
                       // borderRadius handled by theme MuiOutlinedInput override
                    />
                 </Box>

                 {/* Password Input - Label Below */}
                 <Box>
                    {/* Use theme typography */}
                    <Typography variant="caption" display="block" sx={{ mt: 0.5 }}> {/* Removed color='text.secondary' - handled by theme */}
                       Password
                    </Typography>
                    <TextField
                       id="password-signin"
                       type="password"
                       variant="outlined"
                       fullWidth
                       placeholder="Your password"
                       // borderRadius handled by theme MuiOutlinedInput override
                    />
                 </Box>

                {/* Remember Me Switch */}
                {/* Uses theme primary color by default */}
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />}
                  label="Remember me"
                  sx={{ justifyContent: 'flex-start', alignItems: 'center', width:'100%'}} // Keep margin top if needed
                />

                {/* Sign In Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary" // Uses theme primary color
                  fullWidth
                  size="large"
                  // sx props handled by theme MuiButton override (py, borderRadius, textTransform, fontWeight, mt, color)
                  sx={{ mt: 1 }} // Keep margin top if needed
                >
                  SIGN IN
                </Button>

                {/* Don't have an account? Link */}
                {/* Already using text.secondary */}
                <Typography variant="body2" align="center" sx={{ mt: 2, color: 'text.secondary' }}>
                  Don't have an account?{' '}
                  <MuiLink component={RouterLink} to="/signup" underline="hover" color="primary">
                    Sign Up
                  </MuiLink>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>

        {/* Right Side (Logo Area) */}
        <Grid
          item
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.main', // Use theme primary color
            position: 'relative',
            overflow: 'hidden',
            height: '80vh',
            width: '40%', // Keep specific width if needed
            // Use theme border radius - Large
            borderRadius: (theme) => `0 0 0 ${theme.shape.borderRadiusLarge}px`,
          }}
        >
           {/* Background Overlay */}
           <Box
              component="img"
              src={Bg1Url}
              alt=""
              sx={{
                 position: 'absolute',
                 top: 0, left: 0,
                 width: '100%',
                 height: '100%', // Ensure overlay covers the grid item height
                 objectFit: 'cover',
                 opacity: 0.9, // Keep opacity if desired
                 zIndex: 0,
              }}
           />

           {/* Chakra Logo - ensure it's above the overlay */}
           <Box sx={{ zIndex: 2, position: 'relative' }}>
            <Box
                component="img"
                src={ChakraLogo}
                alt="Chakra logo"
                sx={{
                height: '10vh',
                width: 'auto',
                filter: 'brightness(0) invert(1)', // Keep filter for white logo
                }}
            />
            </Box>

        </Grid>

      </Grid>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SignIn;