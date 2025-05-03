import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'; // Removed createTheme
import App from './App';
import './index.css'; // Keep or replace with your global styles
import theme from './theme/theme'; // Import the theme from the new file

// Basic Theme (Customize later based on Figma)
// const theme = createTheme({ // REMOVE THIS OLD THEME DEFINITION
//   palette: {
//     primary: {
//       main: '#4FD1C5', // Example primary color, adjust from Figma
//     },

//     // Add other theme customizations (typography, breakpoints, etc.)
//   },
//   typography: {
//     fontFamily: 'Helvetica', // Example font, adjust from Figma
//     // Add other typography settings (font sizes, weights, etc.)
//   },
//   components: {
//     // Target the OutlinedInput component used by TextField (variant="outlined")
//     MuiOutlinedInput: {
//       styleOverrides: {
//         // Target the root element of the outlined input
//         root: {
//           borderRadius: '10px', // Apply your desired border radius globally
//           // You can add other global styles here if needed
//           // e.g., '&.Mui-focused fieldset': { borderColor: 'yourColor' },
//         },
//       },
//     },
//   },
//   // You might need to customize component defaults for pixel perfection
// }); // REMOVE UNTIL HERE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}> {/* Use the imported theme */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);