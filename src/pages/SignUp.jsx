import React from 'react';
import { Box, Typography, TextField, Button, Switch, FormControlLabel, Paper, Container, Stack, IconButton, Link as MuiLink } from '@mui/material'; // Removed Divider
import { Link as RouterLink } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

// Import SVG icons
import AppleIcon from '../assets/apple.svg?react';
import FacebookIcon from '../assets/facebook.svg?react';
import GoogleIcon from '../assets/google.svg?react';
// Import Background Overlays as URL for background-image or as component for img tag
import BgUrl from '../assets/bg.svg?url';


// REMOVE - const mainBgColor = '#4FD1C5'; // Main background color - Use theme.palette.primary.main

// Style for Social Icon Buttons - Use theme values
const socialIconButtonSx = (theme) => ({ // Make it a function to access theme
  border: `1px solid ${theme.palette.divider}`, // Use theme divider color
  borderRadius: theme.shape.borderRadiusCircle, // Use theme shape for circle
  height: '75px',
  width: '75px',
  p: theme.spacing(1.5), // Use theme spacing
  '& svg': {
    width: '24px',
    height: '24px',
  }
});

const SignUp = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Use Header in light mode */}

      <Box>
        <Header themeMode="light" /> {/* Use light mode for header */}
      </Box>
      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          py: { xs: 4, md: 8 },
          // REMOVE - bgcolor: mainBgColor, // Use theme or specific component background
          mt:-10, // Keep margin-top if needed for layout overlap
          
        }}
      >
        {/* Optional Second Overlay Image if needed */}
        <Box
          component="img"
          src={BgUrl}
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            width: '98%', height: '50%',
            mx: 'auto',
            objectFit: 'cover',
            opacity: 1,
            zIndex: 0,
            // Use theme border radius - Medium
            borderRadius: (theme) => `0 0 ${theme.shape.borderRadiusMedium}px ${theme.shape.borderRadiusMedium}px`,
          }}
        />


        {/* Content Container - ensure it's above overlays */}
        {/* Changed maxWidth to 'xs' */}
        <Container maxWidth="sm" sx={{ zIndex: 9, position: 'relative', mt: 10 }}>
          <Stack spacing={4} alignItems="center">

            {/* 1. Welcome Text Box */}
            {/* Use theme text color */}
            <Box sx={{ textAlign: 'center', color: 'text.light', mb: 4, maxWidth: '20vw' }}>
              <Typography variant="h4" component="h1" gutterBottom> {/* Removed fontWeight="bold" - handled by theme */}
                Welcome!
              </Typography>
              {/* Use theme typography variant */}
              <Typography variant="body3"> {/* Ensure white text */}
                Use these awesome forms to login or create new account in your project for free.
              </Typography>
            </Box>

            {/* 2. Sign Up Form */}
            <Paper
              elevation={0} // Keep elevation 0 if using custom shadow
              sx={{
                // Increased padding
                p: { xs: 4, md: 8 },
                width: '90%',
                bgcolor: 'background.paper', // Use theme paper background
                // Added boxShadow for drop shadow effect
                boxShadow: (theme) => theme.shadows[2], // Example shadow level, adjust as needed
              }}
            >
              <Stack spacing={2.5} component="form" noValidate autoComplete="off">
                {/* Social Login */}
                {/* Use theme typography */}
                <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 1 }}> {/* Removed fontWeight="bold" - handled by theme */}
                  Register with
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                  {/* Pass theme to sx function */}
                  <IconButton aria-label="Sign up with Facebook" sx={socialIconButtonSx}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="Sign up with Apple" sx={socialIconButtonSx}>
                    <AppleIcon />
                  </IconButton>
                  <IconButton aria-label="Sign up with Google" sx={socialIconButtonSx}>
                    <GoogleIcon />
                  </IconButton>
                </Stack>

                {/* Use theme typography */}
                {/* Already using text.secondary */}
                <Typography variant="h6" color="text.secondary" sx={{ textAlign : 'center' }}>or</Typography>


                {/* Name Input - Label Below */}
                <Box>
                {/* Use theme typography */}
                <Typography variant="body1" display="block" sx={{ mt: 0.5 }}> {/* Use theme font weight */}
                      Name
                   </Typography>
                   <TextField
                      id="name-signup"
                      variant="outlined"
                      fullWidth
                      placeholder="Your full name"
                      // borderRadius handled by theme MuiOutlinedInput override
                   />
                </Box>

                {/* Email Input - Label Below */}
                 <Box>
                 {/* Use theme typography */}
                 <Typography variant="body1" display="block" sx={{ mt: 0.5 }}> {/* Use theme font weight */}
                      Email
                   </Typography>
                   <TextField
                      id="email-signup"
                      type="email"
                      variant="outlined"
                      fullWidth
                      placeholder="Your email address"
                      // borderRadius handled by theme MuiOutlinedInput override
                   />

                 </Box>

                {/* Password Input - Label Below */}
                 <Box>
                 {/* Use theme typography */}
                 <Typography variant="body1" display="block" sx={{ mt: 0.5}}> {/* Use theme font weight */}
                      Password
                   </Typography>
                   <TextField
                      id="password-signup"
                      type="password"
                      variant="outlined"
                      fullWidth
                      placeholder="Your password"
                      // borderRadius handled by theme MuiOutlinedInput override
                   />

                 </Box>

                {/* Remember Me Switch */}
                <FormControlLabel
                  control={<Switch defaultChecked color="primary" />} // Uses theme primary color
                  label="Remember me"
                  // Use theme text color
                  sx={{ justifyContent: 'flex-start', color: 'text.primary' }}
                />

                {/* Sign Up Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary" // Uses theme primary color
                  fullWidth
                  size="large"
                  // sx props handled by theme MuiButton override (py, borderRadius, textTransform, fontWeight, color)
                >
                  SIGN UP
                </Button>

                {/* Already have an account? Link */}
                {/* Already using text.secondary */}
                <Typography variant="body2" align="center" sx={{ mt: 2, color: 'text.secondary' }}>
                  Already have an account?{' '}
                  {/* Use theme link color and font weight */}
                  <MuiLink component={RouterLink} to="/signin">
                    Sign In
                  </MuiLink>
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SignUp;