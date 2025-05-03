import React from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';
import SidebarNav from '../components/dashboard/SidebarNav';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import KpiSummary from '../components/dashboard/KpiSummary';
import HeroPanels from '../components/dashboard/HeroPanels';
import ChartPanels from '../components/dashboard/ChartPanels';
import ProjectsTable from '../components/dashboard/ProjectsTable'; // Import ProjectsTable
import OrdersOverview from '../components/dashboard/OrdersOverview'; // Import OrdersOverview

const Dashboard = () => {
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
        {/* Header specific to the dashboard content area */}
        <DashboardHeader />

        {/* Page Content */}
        <KpiSummary />
        <HeroPanels />
        <ChartPanels />

        {/* New Row for Projects and Orders */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}> {/* Projects Table takes ~60% width */}
            <ProjectsTable />
          </Grid>
          <Grid item xs={12} md={4}> {/* Orders Overview takes ~40% width */}
            <OrdersOverview />
          </Grid>
        </Grid>

        {/* Add Footer if needed within the main content area */}
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default Dashboard;