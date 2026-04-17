import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ErrorMessage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Typography variant="h6">Error. Try refreshing the page</Typography>
    </Box>
  );
}
