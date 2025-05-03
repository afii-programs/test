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
  Chip, // For status badges
  Link, // For edit links
} from '@mui/material';

// Import Author Images
import Author1 from '../../assets/author-1.png';
import Author2 from '../../assets/author-2.png';
import Author3 from '../../assets/author-3.png';
import Author4 from '../../assets/author-4.png';
import Author5 from '../../assets/author-5.png';
import Author6 from '../../assets/author-6.png';


// Mock Data based on the image - Updated with actual image imports
const authorsData = [
  { id: 1, name: 'Elaine Benes', email: 'elaine@vandelay.com', avatar: Author1, function: 'Manager', department: 'Organization', status: 'Online', employed: '14/06/21' },
  { id: 2, name: 'Sidra Holland', email: 'sidra@vandelay.com', avatar: Author2, function: 'Programmer', department: 'Developer', status: 'Offline', employed: '14/06/21' },
  { id: 3, name: 'Cosmo Kramer', email: 'kramer@vandelay.com', avatar: Author3, function: 'Executive', department: 'Projects', status: 'Online', employed: '14/06/21' },
  { id: 4, name: 'Newman', email: 'newman@usps.com', avatar: Author4, function: 'Manager', department: 'Organization', status: 'Online', employed: '14/06/21' },
  { id: 5, name: 'Frank Costanza', email: 'frank@vandelay.com', avatar: Author5, function: 'Programmer', department: 'Developer', status: 'Offline', employed: '14/06/21' },
  { id: 6, name: 'Art Vandelay', email: 'art.v@vandelay.com', avatar: Author6, function: 'Designer', department: 'UI/UX Design', status: 'Offline', employed: '14/06/21' },
];

// Helper for status chip color
const getStatusColor = (status) => {
  return status === 'Online' ? 'success' : 'default'; // 'success' for green, 'default' for grey
};

const AuthorsTable = () => {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', height: '100%' }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">Authors Table</Typography>
        {/* Optional: Add subtitle if needed */}
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="authors table">
          <TableHead sx={{ '& .MuiTableCell-head': { border: 0, pb: 1, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase' } }}>
            <TableRow>
              <TableCell>Author</TableCell>
              <TableCell>Function</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Employed</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ '& .MuiTableCell-body': { border: 0, py: 1 } }}>
            {authorsData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Use the imported avatar variable */}
                    <Avatar alt={row.name} src={row.avatar} sx={{ width: 40, height: 40, mr: 1.5 }} />
                    <Box>
                      <Typography variant="body2" fontWeight="bold">{row.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{row.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" fontWeight="bold">{row.function}</Typography>
                  <Typography variant="caption" color="text.secondary">{row.department}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    size="small"
                    sx={{ fontWeight: 'bold', borderRadius: '8px', height: '24px' }} // Custom styling for chip
                  />
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" fontWeight="bold">{row.employed}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Link href="#" underline="hover" sx={{ color: 'text.secondary', fontWeight: 'bold', fontSize: '0.875rem' }}>
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AuthorsTable;