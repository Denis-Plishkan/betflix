import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Navbar';
import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container
      fixed
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
