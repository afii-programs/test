import React from 'react';
import { Grid, Card, CardContent, Typography, Link, Box, Button } from '@mui/material'; // Changed Paper to Card, Added Button
import ChakraLogoWhite from '../../assets/chakra.svg?react'; // Assuming you have a white Chakra logo SVG
import HeroPanel2 from '../../assets/hero-panel2.png'; // Import the image URL directly
import theme from '../../theme/theme';
// Define the teal color

// Placeholder for background image - replace with actual import if available
// import PeopleTableImage from '../../assets/people-table.jpg?url';

const HeroPanels = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {/* Left Hero Panel (Chakra Docs Card) */}
      <Grid item xs={12} md={7}> {/* Adjusted grid size to ~60% */}
        <Card
          elevation={2} // Elevation 2
          sx={{
            borderRadius: '16px', // Border-radius
            height: '210px', // Height 200-220px
            overflow: 'hidden', // Hide overflow
            display: 'flex', // Use flex to position columns
            p: 0, // Remove padding from Card itself
          }}
        >
          {/* Left Column (Text Content) */}
          <Box sx={{ flexBasis: '60%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1 }}> {/* Caption style */}
              Built by developers
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}> {/* Title style */}
              Purity UI Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}> {/* Body style */}
              From colors, cards, typography to complex elements, you will find the full documentation.
            </Typography>
            {/* Text Button variant for link */}
            <Button variant="text" href="#" sx={{ alignSelf: 'flex-start', p: 0, '&:hover': { bgcolor: 'transparent' } }}>
              Read more →
            </Button>
          </Box>
          {/* Right Column (Logo Background) */}
          <Box
            sx={{
              flexBasis: '40%',
              bgcolor: theme.palette.primary.main, // Teal background
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Placeholder for Chakra Logo */}
            <ChakraLogoWhite style={{ width: '7vw', height: 'auto', color: 'white' }} />
          </Box>
        </Card>
      </Grid>

      {/* Right Hero Panel (Rockets Promo Card) */}
      <Grid item xs={12} md={5}> {/* Adjusted grid size */}
        <Card
          elevation={2} // Elevation 2 (or adjust as preferred)
          sx={{
            borderRadius: '16px', // Border-radius
            height: '210px', // Height 200-220px
            position: 'relative', // Needed for overlay
            overflow: 'hidden', // Hide overflowing background
            display: 'flex', // Use flex for content alignment
            alignItems: 'center', // Center content vertically
            color: 'common.white', // Default text color
            p: 0, // Remove padding from Card itself
            // Background Image Styles
            backgroundImage: `url(${HeroPanel2})`, // Use the imported image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // bgcolor: 'grey.800', // Remove fallback background color
            '&::before': { // Dark overlay
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay, 60% opacity
              zIndex: 1,
            }
          }}
        >
          {/* Content Box (Above Overlay) */}
          <Box sx={{ position: 'relative', zIndex: 2, p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}> {/* Title style */}
              Work with the Rockets
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}> {/* Body style */}
              Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
            </Typography>
            {/* Text Button variant for link, white color */}
            <Button variant="text" href="#" sx={{ color: 'common.white', p: 0, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
              Read more →
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroPanels;