import React from 'react';
import { Box, Paper, Typography } from '@mui/material'; // Removed Avatar
import theme from '../../theme/theme';
// Removed getIconBgColor function as icon color is now fixed


const StatCard = ({ title, value, delta, Icon }) => { // Removed iconColor prop
  const isPositive = delta && delta.startsWith('+');
  // Determine delta color based on whether it starts with '+' or '-' (or handle other cases if needed)
  const deltaColor = delta ? (delta.startsWith('+') ? 'success.main' : 'error.main') : 'text.secondary';

  return (
    <Paper
      elevation={0} // Using elevation 0 and border for a flatter look, adjust as needed
      sx={{
        p: '16px 24px', // Padding: 16px top/bottom, 24px left/right
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '16px', // Border-radius: 16px
        bgcolor: 'background.paper',
        border: '1px solid', // Optional: Add a subtle border
        borderColor: 'divider', // Use theme divider color for border
        minHeight: '80px', // Ensure consistent height
        width: { xs:'100%', md:'18vw'}, // Ensure full width

      }}
    >
      {/* Left: Text Info */}
      <Box>
        <Typography variant="subtitle2" color="text.secondary" display="block" sx={{ mb: 0.5 }}> {/* Label style */}
          {title}
        </Typography>
        <Typography variant="h5" component="div" fontWeight={700}> {/* Value style */}
          {value}
        </Typography>
        {delta && (
          <Typography variant="body2" fontWeight={600} color={deltaColor} component="span"> {/* Delta style */}
            {delta}
          </Typography>
        )}
      </Box>

      {/* Right: Icon */}
      {Icon && ( // Render Icon directly, without Avatar
         // Wrap Icon in a Box for background styling
         <Box
           sx={{
             bgcolor: theme.palette.primary.main, // Teal background
             color: 'common.white', // White icon color
             borderRadius: '12px', // Rounded corners like sidebar active icon bg
             p: '10px', // Padding around the icon
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
           }}
         >
           <Icon sx={{ fontSize: '24px' }} /> {/* Adjust icon size if needed, color is inherited */}
         </Box>
      )}
    </Paper>
  );
};

export default StatCard;