import { createTheme } from '@mui/material/styles';
import { color, shadows } from '@mui/system'; // Import default shadows if needed

// Define common values
const primaryColor = '#4FD1C5';
const secondaryTextColor = '#A0AEC0';
const darkTextColor = '#2D3748';
const lightTextColor = '#FFFFFF';
const defaultBorderRadius = 12; // Default border radius for components like buttons

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: lightTextColor, // Text color on primary background
    },
    secondary: {
      main: darkTextColor, // Or another secondary color if needed
    },
    text: {
      primary: darkTextColor,
      secondary: secondaryTextColor,
      disabled: '#CBD5E0', // Example disabled color
      light: lightTextColor, // Custom addition for white text
    },
    background: {
      default: lightTextColor, // Example default background
      paper: lightTextColor,
    },
    divider: '#E2E8F0', // Example divider color
    common: {
        white: lightTextColor,
        black: '#1A202C' // Example black
    }
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif', // Use a font stack
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    h4: {
        fontWeight: 700, // Bold H4 like in SignUp/SignIn
    },
    h6: {
        fontWeight: 700, // Bold H6 like in SignUp
    },
    body1: {
        color: 'black', // Default body text color
    },
    body2: {
        color: secondaryTextColor, // Default secondary body text color
        fontWeight: 400, // Regular body text
        fontSize: '14px', // Default body text size
    },
    fbody: {
        color: secondaryTextColor, // Default secondary body text color
        fontWeight: 400, // Regular body text
        fontSize: '12px', // Default body text size
    },
    body3: {
        color: lightTextColor, // Default secondary body text color
        fontWeight: 400, // Regular body text
    },
    button: {
        textTransform: 'none', // Keep button text case as is
        fontWeight: 700, // Bold button text
    },
    caption: {
        color: secondaryTextColor, // Caption color for labels below fields
        fontWeight: 700, // Bold caption like in SignIn
    }
  },
  shape: {
    borderRadius: defaultBorderRadius, // Default border radius
    borderRadiusSmall: 8, // Smaller radius option
    borderRadiusMedium: 16, // Medium radius option (e.g., Paper, Header)
    borderRadiusLarge: 20, // Larger radius option (e.g., Header Button)
    borderRadiusPill: 9999, // Pill shape
    borderRadiusCircle: '50%', // Circle shape
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: defaultBorderRadius, // Default button radius
          paddingTop: '12px', // Consistent padding
          paddingBottom: '12px',
        },
        containedPrimary: {
            color: lightTextColor, // Ensure text is white on primary buttons
        },
        sizeLarge: {
            paddingTop: '16px',
            paddingBottom: '16px',
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '15px', // Specific radius for text fields from original theme
          fill: '#FFFFFF', // Fill color for text fields
          borderColor: '#E2E8F0', // Border color for text fields
          '&.Mui-focused fieldset': {
            borderColor: primaryColor, // Optional: Ensure focus border uses primary color
          },
        },
        // input: { // Style the input element itself if needed
        //     '&::placeholder': {
        //         color: secondaryTextColor, // Style placeholder text
        //         opacity: 1, // Ensure placeholder is visible
        //     },
        // },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: 16, // Default Paper radius
            }
        }
    },
    MuiLink: {
        color: primaryColor, // Default link color
        underline: 'none', // Remove underline
        // styleOverrides: {
        //     root: {
        //         color: secondaryTextColor, // Default link color
        //     }
        // }
    },
    MuiSwitch: {
      
      styleOverrides: {
        // Style the track (the background bar)
        track: ({ theme, ownerState }) => ({
          borderRadius: theme.shape.borderRadiusLarge, // Make track ends fully rounded
          backgroundColor: theme.palette.grey[400], // Color when switch is off
          opacity: 1,
          height: '20px', // Adjust height
          width: 'max', // Adjust width
           // Adjust width
          // Add padding to the sides
          '.Mui-checked + &': { // Styles for the track when the switch is checked
            backgroundColor: primaryColor, // Use the custom teal color when checked
            opacity: 1,
          },
        }),
        // Style the thumb (the circle)
        thumb: {
          color: lightTextColor, // Keep thumb white
          // margin: '0px 20px 0px 5px', // Adjust margin
          
        },
        // Style the base (container for thumb)
        switchBase: {
          padding: '11px 15px 11px 10px', // Remove padding
          // Styles when the switch is checked
          '&.Mui-checked': {
            color: lightTextColor, // Color of the thumb area when checked (overlaps thumb)
            // We don't need to transform the thumb position here usually
            // '&:hover': { // Optional: Control hover state when checked
            //   backgroundColor: 'rgba(255, 255, 255, 0.08)', // Example hover effect
            // },
          },
          // Styles for the ripple effect on hover/focus (optional customization)
          // '& .MuiSwitch-input': {
          //   /* styles for input */
          // },
        },
      },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                // Global IconButton styles if any
            }
        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                borderRadius: 16, // Default AppBar radius
                boxShadow: 'none',
            }
        }
    },
    // Add other component overrides as needed
  },
  shadows: [ // Optional: Customize shadows if needed
    'none', // 0
    '0px 1px 1px -1px rgba(255, 0, 0, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)', // 1 (MUI default)
    // ... add or customize other shadow levels (up to 24)
    // Example: Customize shadow level 4
    '0px 1px 2px -1px rgba(0, 0, 0, 0.02), 0px 4px 5px 0px rgba(0, 0, 0, 0.06), 0px 1px 10px 0px rgba(0, 0, 0, 0.07)', // 4 (MUI default)
    // ... rest of the default shadows or your custom ones
  ],
});

export default theme;