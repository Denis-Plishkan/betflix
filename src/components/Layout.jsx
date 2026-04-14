import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Navbar';
import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container fixed>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
