import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Button, Divider, Paper, Card, CardContent, CardActions, useTheme } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// Import New Icons
import HomeIcon from '@mui/icons-material/Home'; // Replaces DashboardIcon
import BarChartIcon from '@mui/icons-material/BarChart'; // Replaces TableChartIcon
import CreditCardIcon from '@mui/icons-material/CreditCard'; // Replaces ReceiptIcon
import BuildIcon from '@mui/icons-material/Build'; // Replaces LanguageIcon (RTL)
import PersonIcon from '@mui/icons-material/Person'; // Replaces AccountCircleIcon
import DescriptionIcon from '@mui/icons-material/Description'; // Replaces LoginIcon (Sign In)
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Replaces PersonAddIcon (Sign Up)
// Keep HelpOutlineIcon for the help card
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VILogoDark from '../../assets/VI Logo dark.svg?react';
import NhBackground from '../../assets/nh-background.png'; // Import the background SVG


// Define the default text color
const defaultTextColor = '#A0AEC0';

const SidebarNav = ({ width }) => {
  const location = useLocation();
  const theme = useTheme();

  // Common styles for ListItemButton
  const listItemButtonStyles = (path) => ({
    borderRadius: '12px',
    py: 1.5,
    px: 2,
    mb: 0.5,
    color: defaultTextColor, // Use the defined default text color
    '&:hover': {
      backgroundColor: 'action.hover',
    },
    '&.Mui-selected': {
      backgroundColor: 'common.white',
      color: 'text.primary', // Active text color (black)
      boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
      '& .MuiListItemIcon-root': {
        backgroundColor: theme.palette.primary.main,
        color: 'common.white',
      },
      '&:hover': {
         backgroundColor: 'common.white',
         opacity: 0.95,
      }
    },
  });

  // Common styles for ListItemIcon (no changes needed here for color logic)
  const listItemIconStyles = (path) => ({
    minWidth: 'auto',
    mr: 1.5,
    bgcolor: 'common.white',
    color: theme.palette.primary.main,
    borderRadius: '8px',
    p: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });


  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', pt: 3, pb: 3 }}>
      {/* Logo & Title */}
      <Box sx={{ pl: 2, pr: 2, display: 'flex', alignItems: 'center', mb: 2 /* Add some margin below logo */ }}>
        <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* Change fill color and add Typography */}
          <VILogoDark style={{ height: '28px', width: 'auto', fill: theme.palette.text.secondary /* Use dark grey */, marginRight: '8px' }} />
        </RouterLink>
      </Box>
      <Divider sx={{ mb: 1 }} />

      {/* Navigation List */}
      <List sx={{ flexGrow: 1, px: 2 }}>
        {/* Primary Nav - Updated Icons */}
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/dashboard" selected={location.pathname === '/dashboard'} sx={listItemButtonStyles('/dashboard')}>
            <ListItemIcon sx={listItemIconStyles('/dashboard')}><HomeIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/tables" selected={location.pathname === '/tables'} sx={listItemButtonStyles('/tables')}>
             <ListItemIcon sx={listItemIconStyles('/tables')}><BarChartIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="Tables" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/billing" selected={location.pathname === '/billing'} sx={listItemButtonStyles('/billing')}>
             <ListItemIcon sx={listItemIconStyles('/billing')}><CreditCardIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="Billing" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/rtl" selected={location.pathname === '/rtl'} sx={listItemButtonStyles('/rtl')}>
             <ListItemIcon sx={listItemIconStyles('/rtl')}><BuildIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="RTL" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>

        {/* Account Pages Section - Updated Icons */}
        <Typography variant="caption" sx={{ pl: 2, pt: 2, pb: 1, display: 'block', color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase' }}>
          ACCOUNT PAGES
        </Typography>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/profile" selected={location.pathname === '/profile'} sx={listItemButtonStyles('/profile')}>
             <ListItemIcon sx={listItemIconStyles('/profile')}><PersonIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="Profile" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/signin" selected={location.pathname === '/signin'} sx={listItemButtonStyles('/signin')}>
             <ListItemIcon sx={listItemIconStyles('/signin')}><DescriptionIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="Sign In" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/signup" selected={location.pathname === '/signup'} sx={listItemButtonStyles('/signup')}>
             <ListItemIcon sx={listItemIconStyles('/signup')}><RocketLaunchIcon fontSize="small" /></ListItemIcon> {/* Updated Icon */}
            <ListItemText primary="Sign Up" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItemButton>
        </ListItem>
      </List>

      {/* Need Help Card - Using Card component */}
      <Card
        elevation={0} // Use elevation 0 to blend better unless a shadow is desired
        sx={{
          m: 2, // Margin around the card
          mt: 'auto', // Pushes to bottom
          borderRadius: '16px', // Match image border radius
          // bgcolor: theme.palette.primary.main, // Teal background for the card itself (acts as fallback)
          color: 'common.white', // White text
          // textAlign: 'center',
          position: 'relative', // For potential background pattern
          overflow: 'hidden', // Hide overflow if using pattern
          // Add background pattern
          backgroundImage: `url(${NhBackground})`, // Set the background image
          backgroundSize: 'cover', // Ensure it covers the card
          backgroundPosition: 'center', // Center the background
        }}
      >
        <CardContent sx={{ p: 2, pb: 1 /* Reduce bottom padding */, position: 'relative', zIndex: 1 /* Ensure content is above background */ }}>
          {/* Icon with background */}
          <Box sx={{
             bgcolor: 'common.white',
             borderRadius: '12px', // Rounded corners for icon background
             width: 40, height: 40,
             display: 'inline-flex', // Center inline
             alignItems: 'center',
             justifyContent: 'center',
             mb: 1,
             color: theme.palette.primary.main // Icon color
           }}>
            <HelpOutlineIcon />
          </Box>
          <Typography variant="subtitle1" fontWeight="bold">Need help?</Typography> {/* Bolder title */}
          <Typography variant="body3" sx={{ mb: 2, opacity: 0.8 }}>Please check our docs</Typography> {/* Slightly transparent text */}
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 /* Remove top padding */, position: 'relative', zIndex: 1 /* Ensure actions are above background */ }}>
          <Button
             variant="contained" // Filled button
             fullWidth // Full width
             href="#" // Add actual documentation link
             sx={{
                bgcolor: 'common.white', // White background
                color: theme.palette.text.primary, // Dark text
                fontWeight: 'bold',
                borderRadius: '12px', // Match image button radius
                '&:hover': {
                    bgcolor: 'grey.200' // Light grey on hover
                }
             }}
          >
            DOCUMENTATION
          </Button>
        </CardActions>
      </Card>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: width,
          boxSizing: 'border-box',
          borderRight: 'none', // Remove default border
          bgcolor: '#F5F5F5', // Changed back to default paper for contrast
          // boxShadow: '0px 4px 12px rgba(0,0,0,0.05)' // Optional: Add subtle shadow if needed
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default SidebarNav;