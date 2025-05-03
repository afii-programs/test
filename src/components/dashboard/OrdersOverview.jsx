import React from 'react';
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // Divider, // Divider is no longer needed
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Bell icon for Design Changes
import Inventory2Icon from '@mui/icons-material/Inventory2'; // Package icon for New Order
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Cart icon for Server Payments
import CreditCardIcon from '@mui/icons-material/CreditCard'; // Card icon for New Card
import VpnKeyIcon from '@mui/icons-material/VpnKey'; // Key/Lock icon for Unlock Packages
import AdbIcon from '@mui/icons-material/Adb'; // Placeholder for XD icon

// Mock Data based on the image - Updated Icons
const ordersData = [
  { id: 1, icon: <NotificationsIcon sx={{ color: 'success.main' }} />, text: '$2400, Design changes', time: '22 DEC 7:20 PM' },
  { id: 2, icon: <Inventory2Icon sx={{ color: 'error.main' }} />, text: 'New order #4219423', time: '21 DEC 11:21 PM' },
  { id: 3, icon: <ShoppingCartIcon sx={{ color: 'info.main' }} />, text: 'Server Payments for April', time: '21 DEC 9:28 PM' },
  { id: 4, icon: <CreditCardIcon sx={{ color: 'warning.main' }} />, text: 'New card added for order #3210145', time: '20 DEC 11:52 PM' }, // Corrected time from image
  { id: 5, icon: <VpnKeyIcon sx={{ color: 'primary.main' }} />, text: 'Unlock packages for Development', time: '19 DEC 11:35 PM' }, // Changed icon color
  { id: 6, icon: <AdbIcon sx={{ color: '#7A6FF0' /* Purple */ }} />, text: 'New order #951258', time: '18 DEC 4:41 PM' }, // Using Adb as placeholder for XD
];

const OrdersOverview = () => {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', height: '100%', width: { xs:'100%', md:'29vw'} }}> {/* Adjusted width for responsiveness */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">Orders overview</Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>+30%</Typography> this month
        </Typography>
      </Box>
      {/* Add relative positioning to the container */}
      <Box sx={{ position: 'relative' }}>
        {/* The Vertical Line */}
        <Box
          sx={{
            position: 'absolute',
            left: '16px', // Adjusted: Center of a 24px icon with 4px (p:0.5) padding = 4 + 24/2 = 16px
            top: '8px', // Start slightly below the top of the first icon's center
            bottom: '8px', // End slightly above the bottom of the last icon's center
            width: '2px', // Line thickness
            bgcolor: 'divider', // Use theme's divider color (light grey)
            zIndex: 0, // Ensure line is behind icons
          }}
        />
        <List disablePadding>
          {ordersData.map((order, index) => (
            // Add relative positioning to each list item for z-index context
            <ListItem key={order.id} disablePadding sx={{ py: 1, position: 'relative', zIndex: 1 }}>
              <ListItemIcon sx={{
                  minWidth: 'auto', // Reset min width
                  mr: 2, // Margin between icon and text (16px)
                  // Ensure icon background is transparent or matches paper to sit nicely on the line
                  bgcolor: 'background.paper', // Match paper background
                  p: 0.5, // Padding around icon (4px)
                  borderRadius: '50%', // Make background circular if needed
                  display: 'flex', // Needed for centering if icon size varies slightly
                  justifyContent: 'center', // Center icon horizontally
                  alignItems: 'center', // Center icon vertically
                 }}>
                {order.icon}
              </ListItemIcon>
              <ListItemText
                primary={order.text}
                secondary={order.time}
                primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', mb: 0.2 }}
                secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
              />
            </ListItem>
            // Removed Divider
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default OrdersOverview;