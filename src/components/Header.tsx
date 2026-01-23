import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky" component="header" role="banner">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                aria-label="Buck & Beard Hunt Club - Home"
              >
                Buck & Beard
              </Typography>
            </Link>
          </Box>
          <Box
            component="nav"
            role="navigation"
            aria-label="Main navigation"
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Button
              component={Link}
              href="/"
              color="inherit"
              aria-current="page"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/about"
              color="inherit"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              About
            </Button>
            <Button
              component={Link}
              href="/properties"
              color="inherit"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              Properties
            </Button>
            <Button
              component={Link}
              href="/hunts"
              color="inherit"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              Hunts
            </Button>
            <Button
              component={Link}
              href="/contact"
              color="inherit"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
