import React from 'react';
import { Box, Typography, Breadcrumbs, Link, InputBase, IconButton, Paper } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Helper function to capitalize the first letter
const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const DashboardHeader = () => {
  const location = useLocation(); // Get current location

  // Derive page name from pathname
  const pathSegments = location.pathname.split('/').filter(Boolean); // Split path and remove empty strings
  const currentPageName = pathSegments.length > 0 ? capitalize(pathSegments[pathSegments.length - 1]) : 'Dashboard'; // Get last segment or default to 'Dashboard'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        px: 3,
      }}
    >
      {/* Left Side: Breadcrumbs & Title */}
      <Box>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'text.secondary' }}>
          <Link component={RouterLink} underline="hover" color="inherit" to="/">
            Pages
          </Link>
          {/* Render path segments dynamically if needed, or just the final page */}
          <Typography sx={{ color: 'text.primary', fontWeight: 'bold' }}>{currentPageName}</Typography>
        </Breadcrumbs>
        <Typography variant="h6" fontWeight="bold">{currentPageName}</Typography> {/* Use dynamic page name */}
      </Box>

      {/* Right Side: Search & Actions */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
        {/* Search Input using InputBase wrapped in Paper for styling */}
        <Paper
          component="form" // Use form for semantic search input
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: { xs: 150, sm: 200 }, // Responsive width
            borderRadius: '16px', // Rounded corners
            border: '1px solid', // Add border if needed
            borderColor: 'divider', // Use theme divider color
            boxShadow: 'none', // Remove default paper shadow if desired
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search dashboard' }}
          />
        </Paper>

        {/* Sign In Link */}
        <Link
          component={RouterLink}
          to="/signin"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'text.secondary', // Use secondary text color
            fontWeight: 'bold',
            mx: 1, // Add some margin
          }}
        >
          <AccountCircleIcon sx={{ mr: 0.5 }} /> Sign In
        </Link>

        {/* Action Icons */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <SettingsIcon /> {/* Placeholder for Settings/User Menu */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default DashboardHeader;