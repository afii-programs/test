import React from 'react';
import { AppBar, Toolbar, Button, Box, Stack, Link as MuiLink, useTheme } from '@mui/material'; // Removed Typography, IconButton. Added useTheme
import { Link as RouterLink } from 'react-router-dom';

// Import SVG Assets as React Components using the '?react' suffix
import VILogoDark from '../assets/VI Logo dark.svg?react';
import VILogo from '../assets/VI Logo.svg?react';
import DIcon from '../assets/d-Icon.svg?react';
import PIcon from '../assets/p-Icon.svg?react';
import SuIcon from '../assets/su-Icon.svg?react';
import SiIcon from '../assets/si-Icon.svg?react';

// Define styles for light and dark modes
const lightModeColors = {
  text: '#FFFFFF', // White text/icons for light mode (on transparent bg)
  buttonText: '#2D3748', // Dark text for the button
  buttonBg: '#FFFFFF',   // White bg for the button
};

const darkModeColors = {
  text: '#2D3748', // Dark text/icons for dark mode (on white bg)
  buttonText: '#FFFFFF', // White text for the button
  buttonBg: 'linear-gradient(to right, #313860, #151928)', // Gradient bg for the button
};


// Reusable NavLink component for header items
const NavLink = ({ to, Icon, label, color }) => (
  <MuiLink
    component={RouterLink}
    to={to}
    sx={{
      display: 'flex',
      alignItems: 'center',
      color: color, // Use passed color
      textDecoration: 'none',
      fontWeight: 'fontWeightMedium', // Use theme font weight
      fontSize: '0.875rem',
      '&:hover': {
        opacity: 0.8,
      },
      '& svg': {
        marginRight: (theme) => theme.spacing(1), // Use theme spacing
        width: '16px',
        height: '16px',
        fill: color, // Let parent control fill via color prop if needed, or rely on SVG inherit
      },
      // Remove path styling, rely on SVG structure or direct fill on Icon component
      '& path': {
        fill: color,
      },
    }}
  >
    {/* Pass color to Icon for potential internal styling */}
    <Icon style={{ fill: color }} /> {/* Apply fill directly here */}
    {label}
  </MuiLink>
);


const Header = ({ themeMode = 'dark' }) => {
  const theme = useTheme(); // Access the theme object
  const isLight = themeMode === 'light';

  // Define colors using theme palette
  const colors = {
    text: isLight ? theme.palette.common.white : theme.palette.text.primary,
    buttonText: isLight ? theme.palette.text.primary : theme.palette.common.white,
    buttonBg: isLight ? theme.palette.common.white : 'linear-gradient(to right, #313860, #151928)', // Keep gradient for dark mode
  };

  const appBarSx = {
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    px: { xs: 2, md: 2 },
    width: '75%',
    py: 1,
    mt: 1,
    mx: 'auto',
    boxShadow: 'none', // Handled by theme MuiAppBar override
    backdropFilter: 'blur(20px)',
    borderRadius: theme.shape.borderRadiusMedium, // Use theme border radius - Medium
    backgroundColor: isLight ? 'transparent' : '#ffffff69', // Keep conditional background
    color: colors.text,
  };

  const buttonSx = {
    borderRadius: theme.shape.borderRadiusLarge, // Use theme border radius - Large
    // textTransform: 'none', // Handled by theme MuiButton override
    // fontWeight: 'bold', // Handled by theme MuiButton override
    px: 3,
    py: 1,
    fontSize: '0.8rem',
    color: colors.buttonText,
    background: colors.buttonBg,
    '&:hover': {
       opacity: 0.9,
       background: colors.buttonBg, // Prevent hover changing gradient background
    }
  };

  return (
    // elevation={0} because boxShadow is handled globally or here
    <AppBar elevation={0} sx={appBarSx}>
      <Toolbar disableGutters>
        {/* Left Side: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 } }}>
          <RouterLink to="/">
             {isLight ? (
                 // Pass fill color directly
                 <VILogo style={{ height: '30px', width: 'auto', fill: colors.text }} />
            ) : (
                 // Pass fill color directly
                 <VILogoDark style={{ height: '30px', width: 'auto', fill: colors.text }} />
        )}
          </RouterLink>
          {/* Optional: Company Name Typography if needed */}
        </Box>

        {/* Center: Navbar */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Stack direction="row" spacing={4}> {/* Increased spacing */}
             {/* Use NavLink component */}
             <NavLink to="/dashboard" Icon={DIcon} label="DASHBOARD" color={colors.text} />
             <NavLink to="/profile" Icon={PIcon} label="PROFILE" color={colors.text} />
             <NavLink to="/signup" Icon={SuIcon} label="SIGN UP" color={colors.text} />
             <NavLink to="/signin" Icon={SiIcon} label="SIGN IN" color={colors.text} />
          </Stack>
        </Box>

        {/* Right Side: Button */}
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block'} }}> {/* Hide button on xs */}
          <Button sx={buttonSx}>
            Free Download
          </Button>
        </Box>

        {/* TODO: Add Mobile Menu (IconButton + Menu) for xs screens */}

      </Toolbar>
    </AppBar>
  );
};

export default Header;