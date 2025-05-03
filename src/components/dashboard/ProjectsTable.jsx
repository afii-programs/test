import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  AvatarGroup,
  LinearProgress,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Import your project SVG icons as React components
import ProjectIcon1 from '../../assets/project-1.svg?react';
import ProjectIcon2 from '../../assets/project-2.svg?react';
import ProjectIcon3 from '../../assets/project-3.svg?react';
import ProjectIcon4 from '../../assets/project-4.svg?react';
import ProjectIcon5 from '../../assets/project-5.svg?react'; // Import project 5
// Assuming you might need more or want placeholders for the rest
import BrushIcon from '@mui/icons-material/Brush'; // Keep as placeholder if needed
import PriceChangeIcon from '@mui/icons-material/PriceChange'; // Keep as placeholder if needed


// Mock Data based on the image - Updated with SVG icons
const projectsData = [
  // Assuming project-1.svg corresponds to 'Chakra Soft UI Version'
  { id: 1, name: 'Chakra Soft UI Version', icon: <ProjectIcon1 />, members: ['U1', 'U2', 'U3', 'U4'], budget: '$14,000', completion: 60 },
  // Assuming project-2.svg corresponds to 'Add Progress Track'
  { id: 2, name: 'Add Progress Track', icon: <ProjectIcon2 />, members: ['U1', 'U2'], budget: '$3,000', completion: 10 },
  // Assuming project-3.svg corresponds to 'Fix Platform Errors'
  { id: 3, name: 'Fix Platform Errors', icon: <ProjectIcon3 />, members: ['U3', 'U4'], budget: 'Not set', completion: 100 },
  // Assuming project-4.svg corresponds to 'Launch our Mobile App'
  { id: 4, name: 'Launch our Mobile App', icon: <ProjectIcon4 />, members: ['U1', 'U2', 'U3', 'U4', 'U5'], budget: '$32,000', completion: 100 },
  // Assuming project-5.svg corresponds to 'Add the New Pricing Page'
  { id: 5, name: 'Add the New Pricing Page', icon: <ProjectIcon5 />, members: ['U1', 'U2', 'U3', 'U4'], budget: '$400', completion: 20 },
  // Using placeholder MUI icon for the remaining project
  { id: 6, name: 'Redesign New Online Shop', icon: <BrushIcon sx={{ color: '#F76E6E' }} />, members: ['U1', 'U2'], budget: '$7,600', completion: 40 },
];

// Helper to determine progress bar color
const getProgressColor = (completion) => {
  if (completion >= 90) return 'success';
  if (completion >= 60) return 'info';
  if (completion >= 30) return 'warning';
  return 'error'; // Or a default color like 'primary'
};


const ProjectsTable = () => {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold">Projects</Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography component="span" sx={{ color: 'success.main', fontWeight: 'bold' }}>✓ 30 done</Typography> this month
          </Typography>
        </Box>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 850 }} aria-label="projects table">
          <TableHead sx={{ '& .MuiTableCell-head': { border: 0, pb: 1, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase' } }}>
            <TableRow>
              <TableCell>Companies</TableCell>
              <TableCell align="center">Members</TableCell>
              <TableCell align="center">Budget</TableCell>
              <TableCell align="center">Completion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ '& .MuiTableCell-body': { border: 0, py: 1.5 } }}>
            {projectsData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Render the icon component directly */}
                    <Box component="span" sx={{ width: 24, height: 24, mr: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       {row.icon}
                    </Box>
                    <Typography variant="body2" fontWeight="bold">{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <AvatarGroup max={4} sx={{ justifyContent: 'center', '& .MuiAvatar-root': { width: 24, height: 24, fontSize: '0.75rem' } }}>
                    {/* Replace with actual avatars if available */}
                    {row.members.map((member, index) => (
                      <Avatar key={index} alt={`Member ${index + 1}`} src={`/path/to/avatar/${member}.jpg`} />
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" fontWeight="bold">{row.budget}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ width: '70%', mx: 'auto' }}> {/* Container for progress */}
                    <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5, color: '#4FD1C5' /* Teal color for percentage */ }}>{row.completion}%</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={row.completion}
                      color={getProgressColor(row.completion)}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProjectsTable;