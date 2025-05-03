import React from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';
import SidebarNav from '../components/dashboard/SidebarNav';
import DashboardHeader from '../components/dashboard/DashboardHeader'; // Reusing dashboard header for now
import AuthorsTable from '../components/tables/AuthorsTable'; // New component
import ProjectsTable from '../components/dashboard/ProjectsTable'; // Reusing dashboard component

const Tables = () => {
  const sidebarWidth = 280; // Define sidebar width

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'grey.100' /* Example background */ }}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <SidebarNav width={sidebarWidth} />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3, // Add padding around the main content
          width: `calc(100% - ${sidebarWidth}px)`,
          ml: '20px', // Offset by sidebar width
          mt: 0, // Adjust if header needs space
        }}
      >
        {/* Header specific to the content area */}
        {/* You might want to customize the header text later */}
        <DashboardHeader />

        {/* Page Content */}
        <Grid container spacing={3}>
          {/* Authors Table */}
          <Grid item xs={12} width={'80vw'}>
            <AuthorsTable />
          </Grid>
          {/* Projects Table */}
          <Grid item xs={12} width={'80vw'}>
            <ProjectsTable />
          </Grid>
        </Grid>

        {/* Add Footer if needed within the main content area */}
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default Tables;