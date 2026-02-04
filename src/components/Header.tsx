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
  const navLogoSrc = `${basePath}/images/nav-logo.png`;

  return (
    <AppBar position="sticky" component="header" role="banner">
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'center', px: 0, minHeight: { xs: '60px', sm: '70px', md: '80px', lg: '90px' } }}>
          {/* Logo positioned to far left */}
          <Box sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', pl: 1, gap: 2 }}>
                <Box
                  component="img"
                  src={navLogoSrc}
                  alt="Buck & Beard Hunt Club - Pursue Your Passion for the Wild"
                  sx={{
                    height: 'auto',
                    width: 'auto',
                    maxHeight: { xs: '60px', sm: '70px', md: '80px', lg: '90px' },
                    maxWidth: { xs: '280px', sm: '320px', md: '360px', lg: '400px' },
                    objectFit: 'contain',
                  }}
                />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    color: 'inherit',
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '1.5rem' },
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, // Only show on large screens to prevent collision
                  }}
                >
                  Buck & Beard Hunt Club
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Desktop Navigation - centered */}
          <Box
            component="nav"
            role="navigation"
            aria-label="Main navigation"
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              position: 'relative',
              zIndex: 2,
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

          {/* Mobile Menu Button - positioned to far right */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>

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
              src={navLogoSrc}
              alt="Buck & Beard Hunt Club Logo"
              style={{
                display: 'block',
                maxHeight: '50px',
                maxWidth: '200px',
                objectFit: 'contain',
              }}
            />
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
