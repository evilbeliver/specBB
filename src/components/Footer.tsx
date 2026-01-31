import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  let basePath = '';
  try {
    const router = useRouter();
    basePath = router.basePath || '';
  } catch (e) {
    // Router not available in test environment
    basePath = '';
  }

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Buck & Beard Hunt Club
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Experience the thrill of the hunt in a safe, sustainable, and welcoming environment.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { href: `${basePath}/`, label: 'Home' },
                { href: `${basePath}/about`, label: 'About' },
                { href: `${basePath}/hunts`, label: 'Hunts' },
                { href: `${basePath}/contact`, label: 'Contact' },
              ].map((link) => (
                <Box component="li" key={link.href} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Contact
            </Typography>
            <Box component="address" sx={{ fontStyle: 'normal' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email:{' '}
                <MuiLink
                  href="mailto:buckandbeard@gmail.com"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': { color: 'white' },
                  }}
                >
                  buckandbeard@gmail.com
                </MuiLink>
              </Typography>
              <Typography variant="body2">
                Phone:{' '}
                <MuiLink
                  href="tel:+18037275111"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': { color: 'white' },
                  }}
                >
                  +1 (803) 727-5111
                </MuiLink>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            &copy; {currentYear} Buck & Beard Hunt Club. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <MuiLink
              component={Link}
              href={`${basePath}/privacy`}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              href={`${basePath}/terms`}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Terms of Service
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
