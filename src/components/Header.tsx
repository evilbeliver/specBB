import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Use the basePath from the Next.js config for production builds
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/specBB' : '';
  const logoSrc = `${basePath}/images/logo.png`;

  return (
    <AppBar position="sticky" component="header" role="banner">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                <img
                  src={logoSrc}
                  alt="Buck & Beard Hunt Club Logo"
                  width={40}
                  height={40}
                  style={{
                    display: 'block',
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                  aria-label="Buck & Beard Hunt Club - Home"
                >
                  Buck & Beard
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            role="navigation"
            aria-label="Main navigation"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            <Button component={Link} href="/" color="inherit" aria-current="page">
              Home
            </Button>
            <Button component={Link} href="/about" color="inherit">
              About
            </Button>
            <Button component={Link} href="/properties" color="inherit">
              Properties
            </Button>
            <Button component={Link} href="/resources" color="inherit">
              Resources
            </Button>
            <Button component={Link} href="/contact" color="inherit">
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, my: 2 }}>
            <img
              src={logoSrc}
              alt="Buck & Beard Hunt Club Logo"
              width={30}
              height={30}
              style={{
                display: 'block',
              }}
            />
            <Typography variant="h6">
              Buck & Beard
            </Typography>
          </Box>
          <List>
            <ListItem disablePadding>
              <Button
                component={Link}
                href="/"
                fullWidth
                sx={{ 
                  py: 2,
                  justifyContent: 'center',
                  color: 'text.primary',
                }}
                aria-current="page"
              >
                <ListItemText primary="Home" />
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button
                component={Link}
                href="/about"
                fullWidth
                sx={{ 
                  py: 2,
                  justifyContent: 'center',
                  color: 'text.primary',
                }}
              >
                <ListItemText primary="About" />
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button
                component={Link}
                href="/properties"
                fullWidth
                sx={{ 
                  py: 2,
                  justifyContent: 'center',
                  color: 'text.primary',
                }}
              >
                <ListItemText primary="Properties" />
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button
                component={Link}
                href="/resources"
                fullWidth
                sx={{ 
                  py: 2,
                  justifyContent: 'center',
                  color: 'text.primary',
                }}
              >
                <ListItemText primary="Resources" />
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button
                component={Link}
                href="/contact"
                fullWidth
                sx={{ 
                  py: 2,
                  justifyContent: 'center',
                  color: 'text.primary',
                }}
              >
                <ListItemText primary="Contact" />
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
