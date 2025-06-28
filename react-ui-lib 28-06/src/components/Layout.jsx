import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <Box component="main" sx={{ padding: '20px' }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}