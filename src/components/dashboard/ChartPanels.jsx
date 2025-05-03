import React from 'react';
import { Grid, Paper, Typography, Box, Divider } from '@mui/material';
// Import Recharts components
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip, // Added Tooltip for interactivity
  AreaChart,
  Area,
  YAxis, // Added YAxis for reference, can be hidden
  CartesianGrid, // Added CartesianGrid for Area chart
  // Remove defs and linearGradient from here
} from 'recharts';
// Import icons for micro-stats
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MouseIcon from '@mui/icons-material/Mouse';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import theme from '../../theme/theme';

// --- Sample Data (Replace with your actual data) ---

// Sample data for Active Users Bar Chart
const barChartData = [
  { name: 'Apr', uv: 400 },
  { name: 'May', uv: 300 },
  { name: 'Jun', uv: 200 },
  { name: 'Jul', uv: 278 },
  { name: 'Aug', uv: 189 },
  { name: 'Sep', uv: 239 },
  { name: 'Oct', uv: 349 },
  { name: 'Nov', uv: 280 },
  { name: 'Dec', uv: 410 },
];

// Sample data for Sales Overview Area Chart
const areaChartData = [
  { name: 'Jan', seriesA: 400, seriesB: 240 },
  { name: 'Feb', seriesA: 300, seriesB: 139 },
  { name: 'Mar', seriesA: 200, seriesB: 980 },
  { name: 'Apr', seriesA: 278, seriesB: 390 },
  { name: 'May', seriesA: 189, seriesB: 480 },
  { name: 'Jun', seriesA: 239, seriesB: 380 },
  { name: 'Jul', seriesA: 349, seriesB: 430 },
];


const ChartPanels = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {/* Left Chart Panel (Active Users) */}
      <Grid item xs={12} md={7}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            color: 'common.white',
            borderRadius: '16px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            width: '25vw', // Full width
          }}
        >
          

          {/* --- Active Users Bar Chart --- */}
          <Box sx={{ height: '250px', mb: 2, bgcolor: '#1E293B', borderRadius:'20px' }}> {/* Set explicit height for chart container */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChartData}
                margin={{ top: 30, right: 10, left: 0, bottom: 30 }} // Adjust margins
                barSize={8} // Bar width ~16px
                barGap={8} // Adjust gap between bars (~24px spacing total)
              >
                <defs>
                  {/* Optional: Define gradient for bars if needed */}
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} hide={true}/>
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'white', fontSize: 10 }} dx={3}/> {/* Hide Y-axis labels */}
                <Tooltip
                  cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                  contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: 'none', borderRadius: '8px' }}
                  itemStyle={{ color: 'white' }}
                />
                <Bar dataKey="uv" fill="#ffffff" radius={[10, 10, 10, 10]} /> {/* White bars, slight top radius */}
              </BarChart>
            </ResponsiveContainer>
          </Box>
          {/* --- End Bar Chart --- */}

          <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.12)' }}/>
          {/* Micro-stats with Icons */}
          <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'space-between', mb: 2}}>
             <Typography variant="body1">Active Users</Typography>
             <Typography variant="body2" sx={{ color: 'success.main' }}>(+23) than last week</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', pt: 1, bgcolor: 'white' }}>
            <Box textAlign="center" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PersonOutlineIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'grey.400', display: 'block' }}>Users</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>36K</Typography>
              </Box>
            </Box>
             <Box textAlign="center" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <MouseIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'grey.400', display: 'block' }}>Clicks</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>2m</Typography>
              </Box>
            </Box>
             <Box textAlign="center" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ShoppingCartOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'grey.400', display: 'block' }}>Sales</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>$772</Typography>
              </Box>
            </Box>
             <Box textAlign="center" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Inventory2OutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'grey.400', display: 'block' }}>Items</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>32</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>

      {/* Right Chart Panel (Sales Overview) */}
      <Grid item xs={12} md={5}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: '16px',
            height: 'auto', // Match height or adjust
            display: 'flex',
            flexDirection: 'column',
            width: '50vw', // Full width
          }}
        >
           <Typography variant="h6">Sales Overview</Typography>
           <Typography variant="body2" sx={{ color: 'success.main', mb: 2 }}>(+5) more in 2021</Typography>

           {/* --- Sales Overview Area Chart --- */}
           <Box sx={{ height: '300px' }}> {/* Set explicit height */}
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart
                 data={areaChartData}
                 margin={{ top: 10, right: 10, left: -20, bottom: 0 }} // Adjust margins to show labels
               >
                 <defs>
                   {/* Teal Gradient */}
                   <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.8}/>
                     <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0}/>
                   </linearGradient>
                   {/* Grey Gradient */}
                   <linearGradient id="greyGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="grey.500" stopOpacity={0.4}/>
                     <stop offset="95%" stopColor="grey.500" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" /> {/* Light grey dashed grid */}
                 <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                 <YAxis tick={{ fontSize: 12 }} />
                 <Tooltip />
                 {/* Series A: Dark line, grey fill */}
                 <Area type="monotone" dataKey="seriesA" stroke="#1E293B" fillOpacity={1} fill="url(#greyGradient)" strokeWidth={2} />
                 {/* Series B: Teal line, teal gradient fill */}
                 <Area type="monotone" dataKey="seriesB" stroke={theme.palette.primary.main} fillOpacity={1} fill="url(#tealGradient)" strokeWidth={2} />
               </AreaChart>
             </ResponsiveContainer>
           </Box>
           {/* --- End Area Chart --- */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChartPanels;