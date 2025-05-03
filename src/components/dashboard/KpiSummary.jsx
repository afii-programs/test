import React from 'react';
import { Grid } from '@mui/material';
import StatCard from './StatCard';
// Import the specified icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PublicIcon from '@mui/icons-material/Public';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const KpiSummary = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}> {/* Keep margin bottom */}
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Today's Money"
          value="$53,000"
          delta="+55%"
          Icon={AccountBalanceWalletIcon} // Use correct icon
          // Removed iconColor prop
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Today's Users"
          value="2,300"
          delta="+5%" // Corrected delta from +3% to +5% per spec
          Icon={PublicIcon} // Use correct icon
          // Removed iconColor prop
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="New Clients"
          value="+3,052" // Corrected value from +3,462 per spec
          delta="-14%" // Corrected delta from -2% to -14% per spec
          Icon={DescriptionIcon} // Use correct icon
          // Removed iconColor prop
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          title="Total Sales"
          value="$173,000" // Corrected value from $103,430 per spec
          delta="+8%" // Corrected delta from +5% to +8% per spec
          Icon={ShoppingCartIcon} // Use correct icon
          // Removed iconColor prop
        />
      </Grid>
      {/* Add more cards if needed */}
    </Grid>
  );
};

export default KpiSummary;